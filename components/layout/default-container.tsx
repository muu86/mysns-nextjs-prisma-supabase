import { PropsWithChildren } from 'react';

export default function DefaultContainer({ children }: PropsWithChildren) {
  return (
    // <main className="grid flex-1 items-start gap-4 p-0 sm:px-6 sm:py-0 md:gap-8">
    //   <div className="mx-auto grid w-full sm:w-[30rem] flex-1 auto-rows-max gap-4">{children}</div>
    // </main>
    <main className="flex flex-col flex-1 items-center gap-4 p-0 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex flex-col flex-1  w-full sm:mx-auto sm:w-[30rem] gap-4">{children}</div>
    </main>
  );
}
