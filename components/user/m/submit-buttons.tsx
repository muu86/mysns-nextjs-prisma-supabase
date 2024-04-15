'use client';

import { MutateUserContext } from '@/components/context/mutate-user-context';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { redirect, useRouter } from 'next/navigation';
import { MouseEvent, useContext } from 'react';

export default function SubmitButtons() {
  const { states, actions } = useContext(MutateUserContext);
  const route = useRouter();

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
