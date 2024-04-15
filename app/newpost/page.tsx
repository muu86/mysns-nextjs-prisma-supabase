import { auth } from '@/auth';
import MutatePostContextProvider from '@/components/context/mutate-post-context';
import ContentCard from '@/components/post/create/content-card';
import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import CreatePostTitleAndButtons from '@/components/post/create/create-post-title-and-buttons';
import UploadCard from '@/components/post/create/upload-card';

export default async function Page() {
  const session = await auth();

  return (
    <MutatePostContextProvider>
      <DefaultContainer>
        <CreatePostTitleAndButtons />
        <DefaultCardContainer>
          <ContentCard />
          <UploadCard />
        </DefaultCardContainer>
      </DefaultContainer>
    </MutatePostContextProvider>
  );
}
