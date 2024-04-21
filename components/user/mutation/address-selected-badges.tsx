'use client';

import { UpdateUserContext } from '@/components/context/update-user-context';
import { Badge } from '@/components/ui/badge';
import { AddressesQuery } from '@/graphql/generated/gql/graphql';
import { CircleX } from 'lucide-react';
import { MouseEvent, useContext } from 'react';

export default function AddressSelectedBadges() {
  const { state, dispatch } = useContext(UpdateUserContext);

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {state.address.map((a, i) => (
        <AddressBadge key={i} address={a} />
      ))}
    </div>
  );
}

function AddressBadge({ address }: { address: AddressesQuery['addresses'][number] }) {
  const { state, dispatch } = useContext(UpdateUserContext);

  function badgeClickHandler(event: MouseEvent<HTMLDivElement>): void {
    dispatch({
      type: 'removeAddress',
      payload: address,
    });
  }

  return (
    <Badge className="w-auto hover:cursor-pointer" onClick={badgeClickHandler}>
      {`${address.c1} ${address.c2} ${address.c3} ${address.c4}`}
      <CircleX className="ml-1 w-5 h-5" />
    </Badge>
  );
}
