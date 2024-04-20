import { auth } from '@/auth';
import { MutationCreateOneChat, QueryChats } from '@/graphql/query/chat';
import { QueryGetUser } from '@/graphql/query/user';
import { getClient } from '@/app/apollo-client';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { userId: string } }) {
  const session = await auth();
  const {
    data: { getUser: me },
  } = await getClient().query({
    query: QueryGetUser,
    variables: {
      where: {
        email: session?.user?.email,
      },
    },
  });
  if (!me) throw new Error('로그인이 필요합니다.');
  console.log('[Chat] me: ', me);

  const { data } = await getClient().query({
    query: QueryChats,
    variables: {
      where: {
        users: {
          every: {
            AND: [
              {
                user: {
                  is: {
                    id: { equals: parseInt(params.userId) },
                  },
                },
              },
              {
                user: {
                  is: {
                    id: { equals: parseInt(me.id) },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });
  // console.log('[Chat] chats: ', data.chats.length === 0);
  console.log('[Chat] me.id: ', parseInt(me.id));
  console.log('[Chat] params.userId', parseInt(params.userId));

  if (data.chats.length === 0) {
    console.log('[Chat] create new chat');
    const { data } = await getClient().mutate({
      mutation: MutationCreateOneChat,
      variables: {
        data: {
          users: {
            create: [
              {
                user: {
                  connect: {
                    id: parseInt(me.id),
                  },
                },
              },
              {
                user: {
                  connect: {
                    id: parseInt(params.userId),
                  },
                },
              },
            ],
          },
        },
      },
    });
    console.log('[Chat] chatCreated: ', data);
  }

  redirect('/chat');
}
