import { CommentContext } from '@/components/context/comment-context';
import { CommentOne } from '@/components/post/comment-one';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { CommentsQuery, CommentsQueryVariables, PostsQuery } from '@/graphql/generated/gql/graphql';
import { cn } from '@/lib/utils';
import { QueryReference, useReadQuery } from '@apollo/client';
import { MouseEvent, useCallback, useContext, useEffect, useState } from 'react';

const COMMENT_COUNT_PER_PAGE = 5;

export default function CommentList({
  post,
  commentOpen,
  queryCommentRef,
  isPending,
}: {
  post: PostsQuery['posts'][number];
  commentOpen: boolean;
  queryCommentRef: QueryReference<CommentsQuery, CommentsQueryVariables>;
  isPending: boolean;
}) {
  const isInPage = useCallback(function (index: number, page: number) {
    return index >= (page - 1) * COMMENT_COUNT_PER_PAGE && index < page * COMMENT_COUNT_PER_PAGE;
  }, []);

  const { data } = useReadQuery(queryCommentRef);
  const { state, dispatch } = useContext(CommentContext);
  const [comments, setComments] = useState<CommentsQuery['comments'] | undefined>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const filtered = data.comments.filter((c, i) => isInPage(i, page));
    setComments(filtered);
  }, [data, page, isInPage]);

  function prevPageHandler(event: MouseEvent<HTMLAnchorElement>): void {
    if (!data.comments) return;
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
  }

  function nextPageHandler(event: MouseEvent<HTMLAnchorElement>): void {
    if (!data.comments) return;
    if (page * COMMENT_COUNT_PER_PAGE >= data.comments.length) {
      return;
    }
    setPage(page + 1);
  }

  return (
    <div className={cn('hidden', { 'flex flex-col': commentOpen })}>
      {comments && comments.map((c, i) => <CommentOne key={i} comment={c} />)}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={prevPageHandler} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={nextPageHandler} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
