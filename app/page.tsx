import { auth } from '@/auth';
import PostContextProvider from '@/components/context/post-context';
import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import PostCardLIST from '@/components/post/post-card-list';
import { Suspense } from 'react';

export default async function Home() {
  const session = await auth();
  console.log('[Home] session: ', session);
  return (
    <PostContextProvider>
      <DefaultContainer>
        <Suspense fallback={<p>loading..,,,.</p>}>
          <DefaultCardContainer>
            <PostCardLIST />
          </DefaultCardContainer>
        </Suspense>
      </DefaultContainer>
    </PostContextProvider>
  );
}
