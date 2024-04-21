'use client';

import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from '@/components/ui/drawer';
import { ChatsQuery } from '@/graphql/generated/gql/graphql';
import { cn } from '@/lib/utils';
import { PanelLeftOpen } from 'lucide-react';
import { Session } from 'next-auth';
import { MouseEvent, useContext, useState } from 'react';
import { ChatContext } from '../context/chat-context';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

export default function ChatList({ session, chatList }: { session: Session | null; chatList: ChatsQuery['chats'] }) {
  const [open, setOpen] = useState(false);
  return (
    // <div className="mt-2 flex flex-row gap-2">
    //   {chatList && chatList.map((c, i) => <ChatListOne key={i} session={session} chat={c} />)}
    // </div>

    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger>
        {/* <Button onClick={() => setOpen(true)} variant="link" className="w-12 h-12 p-0"> */}
        <PanelLeftOpen className={cn('ml-6 transition-all', { 'rotate-180': open })} />
        {/* </Button> */}
      </DrawerTrigger>
      <DrawerContent className="h-screen rounded-none w-32">
        <div className="mx-auto w-full max-w-sm">
          {/* <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader> */}
          <div className="mt-2 flex flex-col gap-2">
            {chatList && chatList.map((c, i) => <ChatListOne setOpen={setOpen} key={i} session={session} chat={c} />)}
          </div>
          {/* <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function ChatListOne({
  setOpen,
  session,
  chat,
}: {
  setOpen: () => void;
  session: Session | null;
  chat: ChatsQuery['chats'][number];
}) {
  const { state, dispatch } = useContext(ChatContext);

  function chatSelectHandler(event: MouseEvent<HTMLButtonElement>): void {
    dispatch({
      type: 'chat/select',
      payload: chat.id,
    });
    setOpen(false);
  }

  const other = chat.users.find((u) => u.user.email !== session?.user?.email);
  const image = other?.user.files.find((f) => f.file?.url?.sm)?.file.url.sm;

  return (
    <Button
      onClick={chatSelectHandler}
      variant="ghost"
      className="flex-1 flex flex-col h-[6rem] items-center justify-start gap-4"
    >
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
        <p className="text-sm font-medium leading-none">{other?.user.username || '1'}</p>
        {/* <p className="text-sm text-muted-foreground">olivia.martin@email.com</p> */}
      </div>
    </Button>
  );
}
