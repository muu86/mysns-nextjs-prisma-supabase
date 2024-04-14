'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid w-full sm:w-[30rem] flex-1 auto-rows-max gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="mx-auto">에러</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <p>{error.message}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="destructive"
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
              className="w-full"
            >
              재시도
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
