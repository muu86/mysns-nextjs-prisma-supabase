'use client';

import { GetUserQuery, PostsNearQuery, PostsNearQueryVariables } from '@/graphql/generated/gql/graphql';
import { QueryPostsNear } from '@/graphql/query/posts';
import { GetDeepProp } from '@/lib/types';
import { useQuery } from '@apollo/client';
import { FetchMoreFunction } from '@apollo/client/react/hooks/useSuspenseQuery';
import { PropsWithChildren, useCallback, useRef, useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import PostCardOne from './post-card-one';

type PageType = {
  take: number;
  skip: 0;
};

export default function PostListWithAddress({
  userAddresses,
}: {
  userAddresses: NonNullable<GetDeepProp<GetUserQuery, 'addresses'>>;
}) {
  const postContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedAddress, setSelectedAddress] = useState(userAddresses![0]);

  const { data, error, loading, fetchMore } = useQuery(QueryPostsNear, {
    variables: {
      selectedAddressId: selectedAddress.address.id,
      take: 10,
      skip: 0,
    },
  });

  if (loading) {
    return (
      <Skeleton className="w-full flex-1 flex items-center justify-center">
        <div className="w-full h-32 flex justify-center items-center">
          <div className="animate-spin w-6 h-6">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g>
                <circle cx="12" cy="2.5" r="1.5" opacity=".14" />
                <circle cx="16.75" cy="3.77" r="1.5" opacity=".29" />
                <circle cx="20.23" cy="7.25" r="1.5" opacity=".43" />
                <circle cx="21.50" cy="12.00" r="1.5" opacity=".57" />
                <circle cx="20.23" cy="16.75" r="1.5" opacity=".71" />
                <circle cx="16.75" cy="20.23" r="1.5" opacity=".86" />
                <circle cx="12" cy="21.5" r="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </Skeleton>
    );
  }
  if (error) {
    return <div>errors</div>;
  }

  return (
    <ScrollTrigger data={data!} fetchMore={fetchMore}>
      {data && data.postsNear.map((p, i) => <PostCardOne key={i} post={p} />)}
    </ScrollTrigger>
  );
}

function ScrollTrigger({
  data,
  fetchMore,
  children,
}: PropsWithChildren<{
  data: PostsNearQuery;
  fetchMore: FetchMoreFunction<PostsNearQuery, PostsNearQueryVariables>;
}>) {
  const triggerRef = useCallback(
    (node: HTMLDivElement) => {
      if (!node) return;
      const parent = node.parentElement;

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('refetch called');
            fetchMore({
              variables: {
                take: 10,
                skip: 1,
                cursor: {
                  id: parseInt(data.postsNear[data.postsNear.length - 1].id),
                },
              },
            });
          }
        });
      });

      observer.observe(node);

      return () => {
        observer.unobserve(node);
        observer.disconnect();
      };
    },
    [fetchMore, data]
  );

  return (
    <>
      {children}
      <div ref={triggerRef} className="w-full h-32 flex justify-center items-center">
        <div className="animate-spin w-6 h-6">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g>
              <circle cx="12" cy="2.5" r="1.5" opacity=".14" />
              <circle cx="16.75" cy="3.77" r="1.5" opacity=".29" />
              <circle cx="20.23" cy="7.25" r="1.5" opacity=".43" />
              <circle cx="21.50" cy="12.00" r="1.5" opacity=".57" />
              <circle cx="20.23" cy="16.75" r="1.5" opacity=".71" />
              <circle cx="16.75" cy="20.23" r="1.5" opacity=".86" />
              <circle cx="12" cy="21.5" r="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
