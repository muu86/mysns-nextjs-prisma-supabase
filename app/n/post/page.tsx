import { auth } from '@/auth';
import MutatePostContextProvider from '@/components/context/mutate-post-context';
import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import ContentCard from '@/components/newpost/content-card';
import CreatePostTitleAndButtons from '@/components/newpost/create-post-title-and-buttons';
import UploadCard from '@/components/newpost/upload-card';

export default async function Page() {
  const session = (await auth())!;
  return (
    <MutatePostContextProvider session={session}>
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
