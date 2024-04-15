import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

// const AllPostsQuery = gql`
//   query {
//     getPosts {
//       id
//       content
//       address {
//         c3
//       }
//       files {
//         file {
//           location
//         }
//       }
//     }
//   }
// `;

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<Skeleton className="w-full min-h-screen bg-black">스켈레톤입니다</Skeleton>}>
        <Post />
      </Suspense>
    </main>
  );
}

async function Post() {
  // const { data, error } = await getClient().query({ query: AllPostsQuery });

  // // if (error) throw new Error(error.message);
  // console.log('data is ========> ', data);
  // console.log(error);
  // const result: string = await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve('끝');
  //   }, 2000);
  // });

  // throw new Error('에러다');

  return (
    <div>
      {/* {data.getPosts.map((p: PostType) => (
          <div>
            <p>{p.id}</p>
          </div>
        ))} */}
      {/* {data.getPosts.map((p: PostType) => (
        <p>p.id</p>
      ))} */}
    </div>
  );
}
