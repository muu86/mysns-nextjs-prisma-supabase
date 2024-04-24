import { auth, signOut } from '@/auth';
import { cn } from '@/lib/utils';
import { Baby, FilePlus, Home, LogOut, LucideIcon, MessageCircleMore, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';

export default async function Side() {
  const session = await auth();
  const profilieLink = session?.user?.email ? `/user/${encodeURIComponent(session.user.email)}` : '/login';
  const menus = [
    // {
    //   name: '홈',
    //   link: '/',
    //   Icon: Home,
    // },
    { name: '새 포스트', link: '/n/post', Icon: FilePlus },
    {
      name: '메시지',
      link: '/chat',
      Icon: MessageCircleMore,
    },
    {
      name: '프로필',
      link: profilieLink,
      Icon: User,
    },
  ];

  return (
    // <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <aside className="fixed bottom-0 sm:left-0 z-10 flex flex-row sm:flex-col justify-center sm:justify-start w-full sm:w-14 h-14 sm:h-full border-r bg-background">
      <nav className="flex flex-row sm:flex-col items-center justify-center gap-4 px-2 sm:py-5">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primaryv2 text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Baby className="h-6 w-6 transition-all group-hover:scale-110" />
          <span className="sr-only">MySNS</span>
        </Link>
        {menus.map((m, i) => (
          <SideOne key={i} menu={m} />
        ))}
      </nav>
      {/* <nav className="ml-auto sm:mt-auto flex flex-row sm:flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav> */}
      <nav className="ml-auto sm:ml-0 sm:mt-auto flex flex-row sm:flex-col items-center gap-4 px-2 sm:py-5">
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <Button
            variant="ghost"
            type="submit"
            className="flex h-9 w-9 p-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground md:h-8 md:w-8"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </form>
      </nav>
    </aside>
  );
}

function SideOne({
  menu: { name, link, Icon },
}: {
  menu: {
    name: string;
    link: string;
    Icon: LucideIcon;
  };
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={link}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
              {}
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{name}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
