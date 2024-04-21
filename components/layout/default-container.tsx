import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function DefaultContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    // <main className="grid flex-1 items-start gap-4 p-0 sm:px-6 sm:py-0 md:gap-8">
    //   <div className="mx-auto grid w-full sm:w-[30rem] flex-1 auto-rows-max gap-4">{children}</div>
    // </main>
    <main
      className={cn(
        'sm:w-[30rem] w-full mx-auto flex flex-col flex-1 items-center gap-4 p-0 sm:px-6 sm:py-0 md:gap-8',
        className
      )}
    >
      {children}
    </main>
  );
}
