import SubmitButtons from '@/components/newpost/submit-buttons';

export default function CreatePostTitleAndButtons() {
  return (
    <div className="flex items-center gap-4">
      {/* <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
            </Button> */}
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight">포스트</h1>
      {/* <Badge variant="outline" className="ml-auto sm:ml-0">
              In stock
            </Badge> */}
      <div className="flex items-center gap-2 md:ml-auto">
        <SubmitButtons />
      </div>
    </div>
  );
}
