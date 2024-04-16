'use client';

import { UpdateUserContext } from '@/components/context/update-user-context';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { differenceInMonths, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import { MouseEvent, useContext, useState } from 'react';
import { ActiveModifiers } from 'react-day-picker';

export default function BabyBirthdayPicker() {
  const { state, dispatch } = useContext(UpdateUserContext);
  const [open, setOpen] = useState(false);

  function selectionChangeHandler(
    day: Date | undefined,
    selectedDay: Date,
    activeModifiers: ActiveModifiers,
    e: MouseEvent<Element>
  ): void {
    e.preventDefault();
    dispatch({
      type: 'setBabyBirth',
      payload: selectedDay,
    });
    setOpen(false);
  }

  return (
    <div className="grid auto-rows-max items-start gap-4 col-span-3 lg:gap-8">
      <Card>
        <CardHeader>
          {/* <CardTitle>아기 생일</CardTitle> */}
          <CardDescription>아기는 몇 개월인가요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            {/* <div className="grid gap-3">
            <Label htmlFor="name">제목</Label>
            <Input id="name" type="text" className="w-full" defaultValue="Gamer Gear Pro Controller" />
          </div> */}
            <div className="grid gap-3 col-span-3">
              {state.babyBirth && (
                <Badge className="mr-auto place-content-center">{`${describeBirth(state.babyBirth)}`}</Badge>
              )}
            </div>
            <div className="grid gap-3 col-span-3">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn('w-full justify-start text-left font-normal', {
                      'text-muted-foreground': !state.babyBirth,
                    })}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {state.babyBirth ? (
                      format(state.babyBirth, 'PPP', { locale: ko })
                    ) : (
                      <span>아기 생일을 선택하세요</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" className="w-full p-0">
                  <Calendar mode="single" selected={state.babyBirth} onSelect={selectionChangeHandler} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function describeBirth(birth: Date) {
  const months = differenceInMonths(Date.now(), birth);
  const description = months === 0 ? '신생아' : `${months}개월`;
  return description;
}
