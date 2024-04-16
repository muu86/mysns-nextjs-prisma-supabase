'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { GetPostsQuery } from '@/graphql/generated/gql/graphql';
import { useContext, useState } from 'react';
import { PostContext } from '../context/post-context';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Image from 'next/image';
import ProfileImageWithFallback from '../common/profile-image-with-fallback';

export default function PostCardOne({ post }: { post: GetPostsQuery['posts'][number] }) {
  const { states, actions } = useContext(PostContext);

  return (
    <div className="grid auto-rows-max items-start gap-4 col-span-3 lg:gap-8">
      <Card>
        {/* <CardHeader>
          <CardTitle>코멘트</CardTitle>
          <CardDescription>코멘트 등록입니다</CardDescription>
        </CardHeader> */}
        <CardContent className="grid gap-2">
          <PostCardProfile />
          <Carousel className="grid">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="ghost" className="left-2" />
            <CarouselNext variant="ghost" className="right-2" />
          </Carousel>

          <Card>
            <CardContent className="p-6">
              테스트 테스트 테스트테스트 테스트 테스트테스트 테스트 테스트테스트 테스트 테스트
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

function PostCardProfile() {
  const [error, setError] = useState(false);
  return (
    <div className="my-2 flex items-center gap-4">
      <ProfileImageWithFallback src="/abc.jpg" />
      <div className="grid gap-1">
        <p className="text-sm font-medium leading-none">Olivia Martin</p>
        {/* <p className="text-sm text-muted-foreground">olivia.martin@email.com</p> */}
      </div>
      <div className="ml-auto font-medium">+$1,999.00</div>
    </div>
  );
}
