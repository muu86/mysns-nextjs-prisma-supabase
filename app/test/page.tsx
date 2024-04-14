'use client';

import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { useRef, useState } from 'react';

export default function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {[1, 2, 3, 4, 5].map((e, i) => (
          <Item key={i} item={e} />
        ))}
      </CommandList>
    </Command>
  );
}

function Item({ item }) {
  const [selected, setSelected] = useState();
  const ref = useRef<HTMLDivElement | null>();
  if (ref) {
    console.log(ref.current?.dataset.selected ? item : '');
  }
  function a(event: FormEvent<HTMLDivElement>): void {
    console.log('hi');
  }

  return (
    <CommandItem onClick={() => console.log('clicked')} value={'' + item} onSelect={(v) => console.log(v)}>
      <Settings className="mr-2 h-4 w-4" />
      <span>{item}</span>
      <CommandShortcut>⌘S</CommandShortcut>
    </CommandItem>
  );
}
