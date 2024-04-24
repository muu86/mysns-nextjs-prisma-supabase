import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as dfn from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateToString(target: string): string {
  const now = Date.now();
  const days = dfn.differenceInDays(now, target);
  if (days === 0) {
    return dateToStringHour(now, target);
  }
  return `${days}일 전`;
}

function dateToStringHour(now: number, target: string): string {
  const hours = dfn.differenceInHours(now, target);
  if (hours === 0) {
    return '방금';
  }

  return `${hours}시간 전`;
}
