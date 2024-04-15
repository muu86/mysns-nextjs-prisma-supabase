import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { graphql } from '@/gql';
import { getClient } from '@/lib/apollo';
import AddressSearchBar from './address-searchbar';
import AddressSelectedBadges from './address-selected-badges';

// const AllAddress = gql`
//   query {
//     getAddress {
//       id
//       code
//       c1
//       c2
//       c3
//       c4
//     }
//   }
// `;

const AllAddress = graphql(`
  query getAllAddress {
    addresses {
      id
      code
      c1
      c2
      c3
      c4
    }
  }
`);

export default async function AddressCard() {
  const { data, loading, error } = await getClient().query({
    query: AllAddress,
  });
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>동네</CardTitle> */}
        <CardDescription>동네를 설정해주세요</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            {/* <Label htmlFor="description">선택한 주소</Label> */}
            <AddressSelectedBadges />
          </div>
          <div className="grid gap-3">
            {/* <Label htmlFor="description">주소 검색</Label> */}
            <AddressSearchBar address={data.addresses} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
