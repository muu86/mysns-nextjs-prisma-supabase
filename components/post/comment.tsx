import { CommentsQueryVariables, PostsQuery, SortOrder } from '@/graphql/generated/gql/graphql';
import {
  CommentCreateInput,
  CommentOrderByWithRelationInput,
  CommentWhereInput,
} from '@/graphql/generated/type-graphql';
import { MutationCreateOneComment, QueryComments } from '@/graphql/query/posts';
import { useLoadableQuery, useMutation } from '@apollo/client';
import { EyeOff, MessageCircleMore, Send } from 'lucide-react';
import { Session } from 'next-auth';
import { MouseEvent, Suspense, lazy, useContext, useState, useTransition } from 'react';
import { PostContext } from '../context/post-context';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { Textarea } from '../ui/textarea';
const CommentList = lazy(() => import('./comment-list'));

export default function Comment({ post }: { post: PostsQuery['posts'][number] }) {
  const [loadComment, queryCommentRef, { refetch }] = useLoadableQuery(QueryComments);
  const [createOneCommentMutation, mutationResult] = useMutation(MutationCreateOneComment);

  const { state: postState } = useContext(PostContext);

  const [message, setMessage] = useState<string>('');
  const [commentOpen, setCommentOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  function submitHandler(event: MouseEvent<HTMLButtonElement>) {
    startTransition(async () => {
      await createOneCommentMutation({
        variables: createMutationVariables({ session: postState.session, content: message, postId: post.id }),
      });

      if (!queryCommentRef) {
        loadComment(createQueryVariables({ postId: post.id }));
        setCommentOpen(true);
      } else {
        refetch();
      }
    });
  }

  function showCommentHandler(event: MouseEvent<HTMLButtonElement>): void {
    setCommentOpen(true);
    loadComment(createQueryVariables({ postId: post.id }));
  }

  function hideCommentHandler(event: MouseEvent<HTMLButtonElement>): void {
    setCommentOpen(false);
  }

  return (
    <div className="grid gap-2">
      <div className="flex flex-row w-full gap-2">
        <Textarea
          className="flex-1"
          placeholder="댓글달기."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={submitHandler} variant="ghost" className="self-end">
          <Send />
        </Button>
      </div>

      <div className="">
        {commentOpen ? (
          <Button variant="ghost" onClick={hideCommentHandler}>
            <EyeOff />
            <span className="ml-2">닫기</span>
          </Button>
        ) : (
          <Button variant="ghost" onClick={showCommentHandler}>
            <MessageCircleMore />
            <span className="ml-2">댓글보기</span>
          </Button>
        )}
      </div>

      {queryCommentRef && (
        <Suspense fallback={<Skeleton className="w-full h-56"></Skeleton>}>
          <CommentList post={post} commentOpen={commentOpen} queryCommentRef={queryCommentRef} isPending={isPending} />
        </Suspense>
      )}
    </div>
  );
}

function createQueryVariables({ postId }: { postId: string }): CommentsQueryVariables {
  const where = {
    post: {
      is: {
        id: {
          equals: parseInt(postId),
        },
      },
    },
  } satisfies CommentWhereInput;

  const orderBy = {
    updatedAt: SortOrder.Desc,
  } satisfies CommentOrderByWithRelationInput;

  return {
    where,
    orderBy,
  };
}

function createMutationVariables({
  session,
  content,
  postId,
}: {
  session: Session | null;
  content: string;
  postId: string;
}) {
  if (!session || session.user?.role !== 'WRITE' || !session.user?.email) {
    console.log('[Comment] : ', '댓글 작성 권한 없음');
  }

  const data = {
    content,
    user: {
      connect: {
        email: session?.user?.email!,
      },
    },
    post: {
      connect: {
        id: parseInt(postId),
      },
    },
  } satisfies CommentCreateInput;

  return {
    data,
  };
}
