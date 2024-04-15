import { PropsWithChildren } from 'react';

export default function DefaultCardContainer({ children }: PropsWithChildren) {
  return <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">{children}</div>;
}
