import DefaultCardContainer from '@/components/layout/default-card-container';
import DefaultContainer from '@/components/layout/default-container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { CircleUserRound } from 'lucide-react';

export default function Page() {
  return (
    <DefaultContainer>
      <DefaultCardContainer>
        <Card className="grid auto-rows-max items-start gap-4 col-span-3 lg:gap-8">
          <CardHeader>
            <div className="my-2 flex flex-row">
              <div className="flex-1 flex flex-row items-center justify-start gap-4">
                <Avatar className="">
                  <AvatarImage src={'u'} alt="profile-image" className="object-cover" />
                  <AvatarFallback>
                    <CircleUserRound />
                  </AvatarFallback>
                </Avatar>
                <div className="">
                  <p className="text-sm font-medium leading-none">username</p>
                  {/* <p className="text-sm text-muted-foreground">olivia.martin@email.com</p> */}
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Badge>{'안녕'}</Badge>
                {/* <div className="ml-auto font-medium">{dfn.differenceInDays(Date.now(), post.updatedAt)}</div> */}
              </div>
            </div>
            <CardDescription>닉네임을 설정해주세요</CardDescription>
          </CardHeader>
          <CardContent>{/* <UsernameInput /> */}</CardContent>
        </Card>
      </DefaultCardContainer>
    </DefaultContainer>
  );
}
