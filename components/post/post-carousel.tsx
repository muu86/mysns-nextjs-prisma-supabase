import { PostsQuery } from '@/graphql/generated/gql/graphql';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export default function PostCarousel({ post }: { post: PostsQuery['posts'][number] }) {
  return (
    <Carousel className="grid overflow-hidden">
      <CarouselContent>
        {post.files.map((f, i) => {
          return <Item url={f.file.url.lg} key={i} />;
        })}
      </CarouselContent>
      <CarouselPrevious variant="ghost" className="left-2" />
      <CarouselNext variant="ghost" className="right-2" />
    </Carousel>
  );
}

function Item({ url }: { url?: string | null }) {
  return (
    <CarouselItem>
      <Card>
        <CardContent className="relative flex aspect-square items-center justify-center p-0 overflow-hidden">
          {url && <Image priority width={1080} height={1080} src={url} alt="post-image" className="object-fills" />}
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
