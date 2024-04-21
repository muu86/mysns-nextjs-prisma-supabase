import { getClient } from '@/app/apollo-client';
import { auth } from '@/auth';
import UpdateUserContextProvider from '@/components/context/update-user-context';
import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import AddressCard from '@/components/user/mutation/address-card';
import BabyBirthdayCard from '@/components/user/mutation/baby-birthday-card';
import ContentCard from '@/components/user/mutation/content-card';
import CreateUserTitleAndButtons from '@/components/user/mutation/create-user-title-and-buttons';
import ImageCard from '@/components/user/mutation/image-card';
import UsernameCard from '@/components/user/mutation/username-card';
import { QueryGetUser } from '@/graphql/query/user';
import { SessionProvider } from 'next-auth/react';

export default async function Page() {
  const session = await auth();
  const { data } = await getClient().query({
    query: QueryGetUser,
    variables: {
      where: {
        email: session?.user?.email || '',
      },
    },
  });
  return (
    <SessionProvider session={session}>
      <UpdateUserContextProvider user={data.getUser}>
        <DefaultContainer>
          <CreateUserTitleAndButtons />
          <DefaultCardContainer>
            <UsernameCard />
            <ImageCard />
            <BabyBirthdayCard />
            <AddressCard />
            <ContentCard />
          </DefaultCardContainer>
        </DefaultContainer>
      </UpdateUserContextProvider>
    </SessionProvider>
  );
}
