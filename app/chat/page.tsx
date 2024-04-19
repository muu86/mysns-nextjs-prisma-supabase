import { auth } from '@/auth';
import Chat from '@/components/chat/chat';
import ChatContextProvider from '@/components/context/chat-context';
import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default async function Page() {
  const session = await auth();

  return (
    <ChatContextProvider session={session}>
      <DefaultContainer>
        <DefaultCardContainer>
          <Suspense fallback={<Skeleton className="w-full flex-1 bg-muted" />}>
            <Chat />
          </Suspense>
        </DefaultCardContainer>
      </DefaultContainer>
    </ChatContextProvider>
  );
}
