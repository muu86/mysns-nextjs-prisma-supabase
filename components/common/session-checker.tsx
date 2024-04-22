import { Session } from 'next-auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function SessionChecker({ session, children }: PropsWithChildren<{ session: Session | null }>) {
  if (session?.user?.role !== 'WRITE') redirect('/');

  return <></>;
}
