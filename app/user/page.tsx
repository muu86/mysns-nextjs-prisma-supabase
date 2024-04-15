import MutateUserContextProvider from '@/components/context/mutate-user-context';
import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import AddressCard from '@/components/user/m/address-card';
import BabyBirthdayCard from '@/components/user/m/baby-birthday-card';
import ContentCard from '@/components/user/m/content-card';
import CreateUserTitleAndButtons from '@/components/user/m/create-user-title-and-buttons';
import ImageCard from '@/components/user/m/image-card';
import UsernameCard from '@/components/user/m/username-card';

export default async function Page() {
  return (
    <MutateUserContextProvider>
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
    </MutateUserContextProvider>
  );
}
