import { auth } from '@/auth';
import PostContextProvider from '@/components/context/post-context';
import DefaultContainer from '@/components/layout/default-container';
import PostCard from '@/components/post/get/post-card';

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <PostContextProvider>
      <DefaultContainer>
        <PostCard />
      </DefaultContainer>
    </PostContextProvider>
  );
}
