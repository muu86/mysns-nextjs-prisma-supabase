import { auth } from '@/auth';
import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import UserTitle from '@/components/user/user-title';
import { QueryGetUser } from '@/graphql/query/user';
import { getClient } from '@/lib/apollo-client';
import { MessageCircleMore } from 'lucide-react';
import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';

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

  console.log(session);
  console.log(isOwner);

  return (
    <DefaultContainer>
      <DefaultContainer>
        <UserTitle session={session} isOwner={isOwner} />
        <DefaultCardContainer>
          <Card className="py-4">
            <CardContent>
              {user.files.length > 0 ? (
                <Image
                  alt="profile image"
                  className="mx-auto aspect-square w-1/2 rounded-full object-cover hover:cursor-pointer"
                  height="300"
                  width="300"
                  src={`${user.files}`}
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

            <div className="flex flex-col items-center justify-center">
              <p className="min-h-32">{user.content}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
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
  console.log(session?.user.email, ' ', email);
  return session!.user!.email === email;
}
