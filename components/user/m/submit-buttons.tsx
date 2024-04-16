'use client';

import { UpdateUserContext } from '@/components/context/update-user-context';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MouseEvent, useContext } from 'react';

export default function SubmitButtons() {
  const { state, submit } = useContext(UpdateUserContext);
  const route = useRouter();

  function saveHandler(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    submit();
  }

  function cancelHandler(event: MouseEvent<HTMLButtonElement>): void {
    route.push('/');
  }

  return (
    <>
      <Button onClick={cancelHandler} variant="outline" size="sm">
        취소
      </Button>
      <Button onClick={saveHandler} disabled={state.isUploading} size="sm">
        {state.isUploading ? <LoaderCircle className="animate-spin" /> : '저장'}
      </Button>
    </>
  );
}
