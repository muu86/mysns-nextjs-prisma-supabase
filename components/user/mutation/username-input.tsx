'use client';

import { UpdateUserContext } from '@/components/context/update-user-context';
import { Input } from '@/components/ui/input';
import { ChangeEvent, useContext, useRef, useState } from 'react';
import { z } from 'zod';

const usernameSchema = z
  .string()
  .min(2, {
    message: '2글자 이상 이름을 사용해주세요.',
  })
  .max(20, {
    message: '글자수가 너무 많아요.',
  });

export default function UsernameInput() {
  const { state, dispatch } = useContext(UpdateUserContext);
  const [usernameError, setUsernameError] = useState<string[]>([]);

  function changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    const validate = usernameSchema.safeParse(event.target.value);
    if (!validate.success) {
      setUsernameError(validate.error.issues.map((e) => e.message));
    } else {
      setUsernameError([]);
    }
    dispatch({
      type: 'setUsername',
      payload: event.target.value,
    });
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-3">
        <Input type="text" className="w-full" value={state.username} onChange={changeHandler} />
        <p className="text-xs min-h-4 text-destructive">{usernameError}</p>
      </div>
    </div>
  );
}
