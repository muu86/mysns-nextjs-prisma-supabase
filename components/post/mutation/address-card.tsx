'use client';

import { UpdatePostContext } from '@/components/context/update-post-context';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QueryGetUser } from '@/graphql/query/user';
import { useSuspenseQuery } from '@apollo/client';
import { Session } from 'next-auth';
import { useContext, useEffect, useState } from 'react';

export function AddressCard({ session }: { session: Session | null }) {
  const { states, actions } = useContext(UpdatePostContext);
  const [value, setValue] = useState<(typeof addresses)[number]>();

  const { data, error } = useSuspenseQuery(QueryGetUser, {
    variables: {
      where: {
        email: session?.user?.email,
      },
    },
  });

  const addresses = data.getUser?.addresses || [];
  // if (addresses.length > 0) {
  //   actions.setSelectedAddress(addresses[0]);
  // }

  function selectChangeHandler(value: string): void {
    actions.setSelectedAddress(addresses.find((a) => a.id === value));
  }

  return (
    <Select onValueChange={selectChangeHandler}>
      <SelectTrigger className="focus:ring-1 focus:ring-offset-0">
        <SelectValue placeholder="동네를 선택해주세요." />
      </SelectTrigger>
      <SelectContent>
        {addresses.map((a, i) => (
          <SelectItem key={i} value={a.id}>
            {a.address.c3}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
