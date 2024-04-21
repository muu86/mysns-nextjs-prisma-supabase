import Link from 'next/link';
import { Button } from '../ui/button';
import { Session } from 'next-auth';

export default function UserTitle({ session, isOwner }: { session: Session | null; isOwner: boolean }) {
  return (
    <div className="px-4 mt-2 flex items-center gap-4">
      {/* <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
            </Button> */}
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight">프로필</h1>
      {/* <Badge variant="outline" className="ml-auto sm:ml-0">
              In stock
            </Badge> */}
      {isOwner && (
        <div className="flex items-center gap-2 md:ml-auto">
          <Link href={`/n/user`}>
            <Button size="sm">수정</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
