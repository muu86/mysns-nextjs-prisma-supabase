import { auth } from '@/auth';
import MutatePostContextProvider from '@/components/context/mutate-post-context';
import Content from '@/components/post/n/content';
import SubmitButtons from '@/components/post/n/submit-buttons';
import Upload from '@/components/post/n/upload';

export default async function Page() {
  const session = await auth();

  return (
    <MutatePostContextProvider>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="mx-auto grid w-full sm:w-[30rem] flex-1 auto-rows-max gap-4">
          <div className="flex items-center gap-4">
            {/* <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
            </Button> */}
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">프로필</h1>
            {/* <Badge variant="outline" className="ml-auto sm:ml-0">
              In stock
            </Badge> */}
            <div className="flex items-center gap-2 md:ml-auto">
              <SubmitButtons />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 col-span-3 lg:gap-8">
              <Content />
            </div>
            <div className="col-span-3 grid auto-rows-max items-start gap-4 lg:gap-8">
              <Upload />
            </div>
          </div>
        </div>
      </main>
    </MutatePostContextProvider>
  );
}
