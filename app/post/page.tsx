import { getClient } from '@/lib/apollo';
import { gql } from '@apollo/client';
import { Post as PostType } from '@prisma/client';

// const AllPost = gql`
//   query {
//     getPosts {
//       id
//       content
//     }
//   }
// `;

export default async function Page() {
  // const { loading, error, data } = await getClient().query({ query: AllPost });

  return (
    <div>
      {/* {data.posts.map((d: PostType) => (
        <Post post={d} />
      ))} */}
    </div>
  );
}

function Post({ post }: { post: PostType }) {
  return (
    <div>
      {/* <p>{post.id}</p>
      <p>{post.content}</p>
      <p>{post.addressId}</p> */}
    </div>
  );
}
