'use client';

import { MutateUserContext } from '@/components/context/mutate-user-context';
import { Badge } from '@/components/ui/badge';
import { Address } from '@prisma/client';
import { CircleX } from 'lucide-react';
import { MouseEvent, useContext } from 'react';

export default function AddressSelectedBadges() {
  const { states, actions } = useContext(MutateUserContext);

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {states.address.map((a, i) => (
        <AddressBadge key={i} address={a} />
      ))}
    </div>
  );
}

function AddressBadge({ address }: { address: Address }) {
  const { states, actions } = useContext(MutateUserContext);

  function badgeClickHandler(event: MouseEvent<HTMLDivElement>): void {
    actions.setAddress((prev) => prev.filter((a) => a.id !== address.id));
  }

  return (
    <Badge className="w-auto hover:cursor-pointer" onClick={badgeClickHandler}>
      {`${address.c1} ${address.c2} ${address.c3} ${address.c4}`}
      <CircleX className="ml-1 w-5 h-5" />
    </Badge>
  );
}
