'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Avatar } from '../ui/avatar';
import { CircleUser } from 'lucide-react';

export default function ProfileImageWithFallback({ src, className }: { src: string; className?: string }) {
  const [error, setError] = useState<SyntheticEvent<HTMLImageElement, Event> | null>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <div
      className={cn(
        'relative flex justify-center items-center rounded-full overflow-hidden h-10 w-10 shrink-0',
        className
      )}
    >
      {error ? (
        <div className="w-full aspect-square flex items-center justify-center bg-muted">
          <CircleUser />
        </div>
      ) : (
        <Image onError={(e) => setError(e)} fill src={src} alt="profile" />
      )}
    </div>
  );
}
