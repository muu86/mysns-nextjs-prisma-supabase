import { gql } from '@apollo/client';
import PostClientComponent from './post-client-component';
import { getClient } from '@/lib/apollo';
import { Post } from '@prisma/client';

const AllPost = gql`
  query {
    posts {
      id
      content
    }
  }
`;

export default async function Page() {
  const { loading, error, data } = await getClient().query({ query: AllPost });

  return (
    <div>
      {data.posts.map((d: Post) => (
        <Post post={d} />
      ))}
    </div>
  );
}

function Post({ post }: { post: Post }) {
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.content}</p>
      <p>{post.addressId}</p>
    </div>
  );
}
