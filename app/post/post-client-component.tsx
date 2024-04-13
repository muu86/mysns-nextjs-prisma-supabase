'use client';

import { gql, useQuery } from '@apollo/client';

// const AllPost = gql`
//   query {
//     drafts {
//       id
//       content
//       address {
//         id
//       }
//     }
//   }
// `;

const AllPost = gql`
  query {
    posts {
      id
      content
    }
  }
`;

export default function PostClientComponent() {
  const { loading, error, data } = useQuery(AllPost);
  console.log(data);
  return <div></div>;
}
