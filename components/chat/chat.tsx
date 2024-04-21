'use client';

import ChatList from '@/components/chat/chat-list';
import ChatRoom from '@/components/chat/chat-room';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { QueryChats } from '@/graphql/query/chat';
import { useSuspenseQuery } from '@apollo/client';
import { redirect } from 'next/navigation';
import { Suspense, useContext, useMemo } from 'react';
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

  const chat = useMemo(() => {
    return data.chats.find((c) => c.id === state.selectedChatId);
  }, [data.chats, state.selectedChatId]);

  return (
    // <Card className="max-h-[calc(100vh-60px)] overflow-hidden flex flex-col items-start lg:gap-8">
    <Card className="h-[calc(100vh-60px)] overflow-hidden grid grid-rows-12">
      {/* <CardHeader className="p-0"> */}
      <Suspense fallback={<Skeleton className="bg-black w-full aspect-square" />}>
        <ChatList session={session} chatList={data.chats} />
      </Suspense>
      {/* </CardHeader> */}
      <CardContent className="row-span-12">
        {chat ? (
          <Suspense fallback={<Skeleton className="w-full h-full flex items-center justify-center">로딩</Skeleton>}>
            <ChatRoom chat={chat} />
          </Suspense>
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-md bg-muted">
            {data.chats.length === 0 ? '채팅이 없습니다.' : '채팅을 선택해주세요.'}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
