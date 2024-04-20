'use client';

import { ChatContext } from '@/components/context/chat-context';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ChatMessagesQuery, ChatsQuery, SortOrder } from '@/graphql/generated/gql/graphql';
import { MutationCreateOneChatMessage, QueryChatMessages, SubscriptionChat } from '@/graphql/query/chat';
import { cn } from '@/lib/utils';
import { useMutation, useSubscription, useSuspenseQuery } from '@apollo/client';
import { CircleUser, Send } from 'lucide-react';
import { Session } from 'next-auth';
import { redirect } from 'next/navigation';
import { ChangeEvent, MouseEvent, useContext, useEffect, useState } from 'react';

export default function ChatRoom({ chat }: { chat: ChatsQuery['chats'][number] | undefined }) {
  if (!chat) return;

  const { session, state } = useContext(ChatContext);
  const [messages, setMessages] = useState<ChatMessagesQuery['chatMessages']>([]);
  const [currentMessage, setCurrent] = useState<string | undefined>();
  const [createOneChatMessage] = useMutation(MutationCreateOneChatMessage);

  if (!session?.user?.username) {
    redirect('/login');
  }

  const { data } = useSuspenseQuery(QueryChatMessages, {
    variables: {
      where: {
        chatId: {
          equals: parseInt(chat.id),
        },
      },
      orderBy: [
        {
          updatedAt: SortOrder.Desc,
        },
      ],
    },
  });
  useEffect(() => {
    if (data) {
      setMessages(data.chatMessages);
    }
  }, [data]);

  const { data: chatMessageData, loading } = useSubscription(SubscriptionChat, {
    variables: {
      chatId: parseInt(chat.id),
    },
  });
  useEffect(() => {
    if (!chatMessageData?.chat?.message) return;
    setMessages([chatMessageData.chat, ...messages]);
  }, [chatMessageData]);

  function messageChangeEventHandler(event: ChangeEvent<HTMLTextAreaElement>): void {
    setCurrent(event.target.value);
  }

  function submitHandler(event: MouseEvent<HTMLButtonElement>): void {
    if (!chat) {
      console.log('선택된 채팅이 없습니다.');
      return;
    }
    if (!state.selectedChatId || isNaN(parseInt(state.selectedChatId))) {
      console.log('선택된 채팅이 유효하지 않습니다.');
      return;
    }
    if (!currentMessage) return;

    const me = chat.users.find((u) => u.user.email === session!.user!.email);
    if (!me?.user.id || isNaN(parseInt(me.user.id))) return;

    createOneChatMessage({
      variables: {
        data: {
          chat: {
            connect: {
              id: parseInt(state.selectedChatId),
            },
          },
          user: {
            connect: {
              email: me.user.email,
            },
          },
          message: currentMessage,
        },
      },
    });
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col-reverse max-h-[580px] overflow-y-scroll bg-muted flex-1">
        {messages.map((cm, i) => (
          <Message key={i} session={session} chat={chat} chatMessage={cm} />
        ))}
      </div>
      <div className="flex flex-row w-full gap-2">
        <Textarea
          className="flex-1"
          placeholder="댓글달기."
          value={currentMessage}
          onChange={messageChangeEventHandler}
        />
        {/* <Test chat={chat} /> */}
        <Button onClick={submitHandler} variant="ghost" className="self-end">
          <Send />
        </Button>
      </div>
    </div>
  );
}

function Message({
  session,
  chat,
  chatMessage,
}: {
  session: Session | null;
  chat: ChatsQuery['chats'][number];
  chatMessage: ChatMessagesQuery['chatMessages'][number];
}) {
  if (session?.user?.role !== 'WRITE') return;

  const other = chatMessage.user.email !== session.user.email;

  return (
    <div
      className={cn('mx-2 py-1 pr-3 bg-primaryv2-foreground rounded-lg my-2 flex flex-row gap-2 items-center', {
        'self-end': other,
        'self-start': !other,
      })}
    >
      <Avatar>
        <AvatarImage />
        <AvatarFallback className="bg-primaryv2-foreground">
          <CircleUser />
        </AvatarFallback>
      </Avatar>
      <p>{chatMessage.message}</p>
    </div>
  );
}
