'use client';

import { MutateUserContext } from '@/components/context/mutate-user-context';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { MouseEvent, useContext } from 'react';

export default function SubmitButtons() {
  const { states, actions } = useContext(MutateUserContext);

  function saveHandler(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    actions.submit();
  }

  function cancelHandler(event: MouseEvent<HTMLButtonElement>): void {
    throw new Error('Function not implemented.');
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
