'use client';

import { ChatsQuery } from '@/graphql/generated/gql/graphql';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { MouseEvent, useContext } from 'react';
import { ChatContext } from '../context/chat-context';
import { Session } from 'next-auth';

export default function ChatList({ session, chatList }: { session: Session | null; chatList: ChatsQuery['chats'] }) {
  return (
    <div className="my-2 flex flex-row">
      {chatList && chatList.map((c, i) => <ChatListOne key={i} session={session} chat={c} />)}
    </div>
  );
}

function ChatListOne({ session, chat }: { session: Session | null; chat: ChatsQuery['chats'][number] }) {
  const { state, dispatch } = useContext(ChatContext);

  function chatSelectHandler(event: MouseEvent<HTMLDivElement>): void {
    dispatch({
      type: 'chat/select',
      payload: chat.id,
    });
  }

  const other = chat.users.find((u) => u.user.email !== session?.user?.email);
  const image = other?.user.files.find((f) => f.file?.url?.sm)?.file.url.sm;

  return (
    <div onClick={chatSelectHandler} className="flex-1 flex flex-col items-center justify-start gap-4">
      <div className="flex flex-row">
        <Avatar className="">
          {image && <AvatarImage src={image} alt="profile-image" className="object-cover" />}
          <AvatarFallback>
            {/* <CircleUserRound /> */}
            {chat.id}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="">
        <p className="text-sm font-medium leading-none">username</p>
        {/* <p className="text-sm text-muted-foreground">olivia.martin@email.com</p> */}
      </div>
    </div>
  );
}
