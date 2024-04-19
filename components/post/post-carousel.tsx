import { getPresignedUrlForGet } from '@/actions/file';
import { PostsQuery } from '@/graphql/generated/gql/graphql';
import Image from 'next/image';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';

export default function PostCarousel({ post }: { post: PostsQuery['posts'][number] }) {
  const [urls, setUrls] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      const urls = await Promise.all(post.files.map((f) => getPresignedUrlForGet(f.file.location)));
      setUrls(urls.map((u) => u.lg));
    })();
  }, [post]);

  return (
    <Carousel className="grid">
      <CarouselContent>
        {urls.map((url, i) => {
          return <Item url={url} key={i} />;
        })}
      </CarouselContent>
      <CarouselPrevious variant="ghost" className="left-2" />
      <CarouselNext variant="ghost" className="right-2" />
    </Carousel>
  );
}

function Item({ url }: { url: string }) {
  return (
    <CarouselItem>
      <Card>
        <CardContent className="relative flex aspect-square items-center justify-center p-0 overflow-hidden">
          <Image priority width={1080} height={1080} src={url} alt="post-image" className="object-fills" />
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
