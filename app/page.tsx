import { auth } from '@/auth';
import PostContextProvider from '@/components/context/post-context';
import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import PostCardList from '@/components/post/post-card-list';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default async function Home() {
  const session = await auth();
  return (
    <PostContextProvider session={session}>
      <DefaultContainer>
        <Suspense
          fallback={
            <Skeleton className="w-full flex-1 flex items-center justify-center">
              {/* <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg> */}
            </Skeleton>
          }
        >
          <DefaultCardContainer>
            <PostCardList />
          </DefaultCardContainer>
        </Suspense>
      </DefaultContainer>
    </PostContextProvider>
  );
}
