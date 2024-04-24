import { getClient } from '@/app/apollo-client';
import { QueryGetUser } from '@/graphql/query/user';
import { Session } from 'next-auth';
import { PropsWithChildren, Suspense } from 'react';
import PostListWithoutAddress from './post-list-without-address';
import PostListWithAddress from './post-list-with-address';
import { Skeleton } from '../ui/skeleton';

export default function PostListCondition({ session, children }: PropsWithChildren<{ session: Session | null }>) {
  const userEmail = session?.user?.email;

  if (userEmail) {
    return <PostListQueryUser email={userEmail}>{children}</PostListQueryUser>;
  }

  return <PostListWithoutAddress />;
}

async function PostListQueryUser({ email, children }: PropsWithChildren<{ email: string }>) {
  const { data } = await getClient().query({
    query: QueryGetUser,
    variables: {
      where: {
        email,
      },
    },
  });

  const user = data.getUser;

  if (user && user.addresses.length > 0) {
    return (
      <Suspense fallback={<Skeleton />}>
        <PostListWithAddress userAddresses={user.addresses} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<Skeleton />}>
      <PostListWithoutAddress />
    </Suspense>
  );
}
