'use client';

import { MutateUserContext } from '@/components/context/mutate-user-context';
import { MapPin } from 'lucide-react';
import { useContext } from 'react';

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { GetAllAddressQuery } from '@/gql/graphql';

type SimpleAddress = {
  id: number;
  c: string;
};

export default function AddressSearchBar({ address }: { address: GetAllAddressQuery['addresses'] }) {
  const { states, actions } = useContext(MutateUserContext);

  const simpleAddress = address.map((a) => ({
    id: a.id,
    c: [a.c1, a.c2, a.c3, a.c4].join(' '),
  }));

  function selectAddress(simpleAddress: SimpleAddress) {
    const selectedAddress = address.find((a) => a.id === simpleAddress.id);
    if (selectedAddress && !states.address.find((a) => a.id === selectedAddress.id)) {
      actions.setAddress((prev) => [...prev, selectedAddress]);
    }
  }

  return (
    <Command className="border">
      <CommandInput placeholder="주소를 검색하세요." />
      <CommandList className="h-32">
        <CommandEmpty>조회 결과가 없습니다.</CommandEmpty>
        {simpleAddress.map((a, i) => (
          <AddressItem key={i} address={a} selectAddress={selectAddress} />
        ))}
      </CommandList>
    </Command>
  );
}

function AddressItem({
  address,
  selectAddress,
}: {
  address: SimpleAddress;
  selectAddress: (simpleAddress: SimpleAddress) => void;
}) {
  function selectHandler(value: string): void {
    selectAddress(address);
  }

  return (
    <>
      <CommandItem onSelect={selectHandler}>
        <MapPin className="mr-2 h-4 w-4" />
        <span>{address.c}</span>
      </CommandItem>
      <CommandSeparator />
    </>
  );
}
