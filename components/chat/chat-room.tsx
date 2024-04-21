'use client';

import { ChatContext } from '@/components/context/chat-context';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ActiveStatus, ChatMessagesQuery, ChatsQuery, SortOrder } from '@/graphql/generated/gql/graphql';
import { MutationCreateOneChatMessage, QueryChatMessages, SubscriptionChat } from '@/graphql/query/chat';
import { cn } from '@/lib/utils';
import { useMutation, useSubscription, useSuspenseQuery } from '@apollo/client';
import { CircleUser, Send } from 'lucide-react';
import { Session } from 'next-auth';
import { ChangeEvent, MouseEvent, useContext, useEffect, useState } from 'react';

export default function ChatRoom({ chat }: { chat: ChatsQuery['chats'][number] }) {
  const { session, state } = useContext(ChatContext);
  const [messages, setMessages] = useState<ChatMessagesQuery['chatMessages']>([]);
  const [currentMessage, setCurrent] = useState<string | undefined>();
  const [createOneChatMessage] = useMutation(MutationCreateOneChatMessage);

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
    setMessages((prev) => [chatMessageData.chat, ...prev]);
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
    <div className="flex flex-col h-full gap-2">
      <div className="flex flex-col-reverse overflow-y-scroll bg-muted flex-1">
        {messages.map((cm, i) => (
          <Message key={i} session={session} chat={chat} chatMessage={cm} />
        ))}
      </div>
      <div className="flex flex-col w-full gap-2">
        <Textarea className="flex-1" value={currentMessage} onChange={messageChangeEventHandler} />
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
  const image = chatMessage.user.files.find((f) => f.status === ActiveStatus.Active)?.file.url.sm;

  return (
    <div
      className={cn('mx-2 py-1 pl-2 pr-3 bg-primaryv2-foreground rounded-lg my-2 flex flex-row gap-2 items-center', {
        'self-end ml-16': other,
        'self-start mr-16': !other,
      })}
    >
      <Avatar className="ring-1 w-10 h-10">
        {image ? (
          <AvatarImage src={image} className="object-cover border" />
        ) : (
          <AvatarFallback className="bg-primaryv2-foreground">
            <CircleUser />
          </AvatarFallback>
        )}
      </Avatar>
      <p>{chatMessage.message}</p>
    </div>
  );
}
