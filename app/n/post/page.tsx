import { auth } from '@/auth';
import UpdatePostContextProvider from '@/components/context/update-post-context';
import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import { AddressCard } from '@/components/post/mutation/address-card';
import ContentCard from '@/components/post/mutation/content-card';
import CreatePostTitleAndButtons from '@/components/post/mutation/create-post-title-and-buttons';
import UploadCard from '@/components/post/mutation/upload-card';
import { Suspense } from 'react';

export default async function Page() {
  const session = (await auth())!;
  return (
    <UpdatePostContextProvider session={session}>
      <DefaultContainer>
        <CreatePostTitleAndButtons />
        <DefaultCardContainer>
          <Suspense>
            <AddressCard session={session} />
          </Suspense>
          <ContentCard />
          <UploadCard />
        </DefaultCardContainer>
      </DefaultContainer>
    </UpdatePostContextProvider>
  );
}
