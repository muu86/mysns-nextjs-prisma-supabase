import { getClient } from '@/lib/apollo';
import { gql, useQuery } from '@apollo/client';

const AllLinksQuery = gql`
  query {
    links {
      id
      title
      url
      description
      imageUrl
      category
    }
  }
`;

export default async function Home() {
  const { data, loading, error } = await getClient().query({ query: AllLinksQuery });
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>;
}
