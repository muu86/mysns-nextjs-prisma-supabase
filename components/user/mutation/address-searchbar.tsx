'use client';

import { MapPin } from 'lucide-react';
import { useCallback, useContext, useEffect } from 'react';

import { UpdateUserContext } from '@/components/context/update-user-context';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { AddressesQuery } from '@/graphql/generated/gql/graphql';

type SimpleAddress = {
  id: string;
  c: string;
};

export default function AddressSearchBar({ address }: { address: AddressesQuery['addresses'] }) {
  const { state, dispatch } = useContext(UpdateUserContext);

  const simpleAddress = useCallback(
    () =>
      address.map((a) => ({
        id: a.id,
        c: [a.c1, a.c2, a.c3, a.c4].join(' '),
      })),
    [address]
  )();

  function selectAddressHandler(simpleAddress: SimpleAddress) {
    const selectedAddress = address.find((a) => a.id === simpleAddress.id);
    if (selectedAddress && !state.address.find((a) => a.id === selectedAddress.id)) {
      dispatch({
        type: 'addAddress',
        payload: selectedAddress,
      });
    }
  }

  return (
    <Command className="border">
      <CommandInput placeholder="주소를 검색하세요." />
      <CommandList className="h-32">
        <CommandEmpty>조회 결과가 없습니다.</CommandEmpty>
        {simpleAddress.map((a, i) => (
          <AddressItem key={i} address={a} selectAddressHandler={selectAddressHandler} />
        ))}
      </CommandList>
    </Command>
  );
}

function AddressItem({
  address,
  selectAddressHandler,
}: {
  address: SimpleAddress;
  selectAddressHandler: (simpleAddress: SimpleAddress) => void;
}) {
  function selectHandler(value: string): void {
    selectAddressHandler(address);
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
