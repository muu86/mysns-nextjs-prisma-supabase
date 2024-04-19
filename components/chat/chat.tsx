'use client';

import ChatList from '@/components/chat/chat-list';
import ChatRoom from '@/components/chat/chat-room';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { QueryChats, SubscriptionChat } from '@/graphql/query/chat';
import { useSubscription, useSuspenseQuery } from '@apollo/client';
import { redirect } from 'next/navigation';
import { Suspense, useContext } from 'react';
import { ChatContext } from '../context/chat-context';

export default function Chat() {
  const { session, state } = useContext(ChatContext);
  if (!session?.user?.email) {
    redirect('login');
  }

  const { data } = useSuspenseQuery(QueryChats, {
    variables: {
      where: {
        users: {
          some: {
            user: {
              is: {
                email: {
                  equals: session?.user?.email,
                },
              },
            },
          },
        },
      },
    },
  });

  return (
    <Card className="flex flex-col flex-1 items-start gap-4 lg:gap-8">
      <CardHeader>
        {/* {loading ? <Skeleton className="bg-black w-full aspect-square" /> : <ChatList chats={data.chats} />} */}
        <Suspense fallback={<Skeleton className="bg-black w-full aspect-square" />}>
          <ChatList session={session} chatList={data.chats} />
        </Suspense>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 w-full">
        {data.chats && data.chats.length > 0 && state.selectedChatId ? (
          <Suspense fallback={<Skeleton className="w-full flex-1 flex items-center justify-center">로딩</Skeleton>}>
            <ChatRoom chat={data.chats.find((c) => c.id === state.selectedChatId)} />
          </Suspense>
        ) : (
          <Skeleton className="w-full flex-1 flex items-center justify-center">채팅을 선택해주세요.</Skeleton>
        )}
      </CardContent>
    </Card>
  );
}
