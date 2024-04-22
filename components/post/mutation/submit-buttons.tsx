'use client';

import { UpdatePostContext } from '@/components/context/update-post-context';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Context, MouseEvent, useContext } from 'react';

export default function SubmitButtons() {
  const route = useRouter();
  const { states, actions } = useContext(UpdatePostContext);

  function saveHandler(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    actions.submit();
  }

  function cancelHandler(event: MouseEvent<HTMLButtonElement>): void {
    route.push('/');
  }

  return (
    <>
      <Button onClick={cancelHandler} variant="outline" size="sm">
        취소
      </Button>
      <Button onClick={saveHandler} disabled={states.isUploading} size="sm">
        {states.isUploading ? <LoaderCircle className="animate-spin" /> : '저장'}
      </Button>
    </>
  );
}
