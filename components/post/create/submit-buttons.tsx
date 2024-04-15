'use client';

import { MutatePostContext } from '@/components/context/mutate-post-context';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Context, MouseEvent, useContext } from 'react';

export default function SubmitButtons() {
  const route = useRouter();
  const { states, actions } = useContext(MutatePostContext);

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
      <Button onClick={saveHandler} size="sm">
        저장
      </Button>
    </>
  );
}
