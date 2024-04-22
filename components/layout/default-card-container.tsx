import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function DefaultCardContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    // <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">{children}</div>
    <div className={cn('flex flex-col w-full px-1 flex-1 gap-4', className)}>{children}</div>
  );
}
