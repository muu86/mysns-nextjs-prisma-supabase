import { auth } from '@/auth';
import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import UserTitle from '@/components/user/user-title';
import { QueryGetUser } from '@/graphql/query/user';
import { getClient } from '@/app/apollo-client';
import { MessageCircleMore } from 'lucide-react';
import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { ActiveStatus } from '@/graphql/generated/gql/graphql';

export default async function Page({ params }: { params: { email: string } }) {
  const userEmail = decodeURIComponent(params.email);
  const session = await auth();
  const { data, loading, error } = await getClient().query({
    query: QueryGetUser,
    variables: {
      where: {
        email: userEmail,
      },
    },
  });
  const user = data.getUser;
  if (!user) throw new Error('유저를 찾을 수 없습니다.');

  const isOwner = checkIsOwner(session, userEmail);

  const profileImageSrc = user.files.find((f) => f.status === ActiveStatus.Active)?.file.url.md;

  return (
    <DefaultContainer>
      <DefaultContainer>
        <UserTitle session={session} isOwner={isOwner} />
        <DefaultCardContainer>
          <Card className="flex flex-col gap-4 h-full py-4">
            <CardContent>
              {profileImageSrc ? (
                <Image
                  alt="profile image"
                  className="mx-auto aspect-square w-1/2 rounded-full object-cover hover:cursor-pointer"
                  height="300"
                  width="300"
                  src={`${profileImageSrc}`}
                />
              ) : (
                <Skeleton className="mx-auto w-1/2 rounded-full aspect-square flex items-center justify-center hover:cursor-pointer">
                  {/* <UploadIcon className="h-4 w-4 text-muted-foreground" /> */}
                  <span className="sr-only">프로필 이미지</span>
                </Skeleton>
              )}
            </CardContent>
            <CardHeader className="items-center">
              <CardTitle>{user.username}</CardTitle>
            </CardHeader>

            <div className="flex flex-row items-center justify-center flex-wrap gap-2">
              {user.addresses
                .map((a) => a.address)
                .map((a, i) => (
                  <Badge key={i} className="w-auto hover:cursor-pointer">{`${a.c1} ${a.c2} ${a.c3} ${a.c4}`}</Badge>
                ))}
            </div>

            <Card className="mt-4 mx-4 p-6 border">
              <CardContent>
                <p className="">{user.content}</p>
              </CardContent>
            </Card>

            <div className="flex flex-col flex-1 items-center justify-center">
              <Link href={`/n/chat/${user.id}`}>
                <Button>
                  <MessageCircleMore />
                </Button>
              </Link>
            </div>
          </Card>
        </DefaultCardContainer>
      </DefaultContainer>
    </DefaultContainer>
  );
}

function isNotLogedIn(session: Session | null) {
  return !session || !session.user || !session.user.username;
}

function checkIsOwner(session: Session | null, email: string) {
  if (isNotLogedIn(session)) return false;
  return session!.user!.email === email;
}
