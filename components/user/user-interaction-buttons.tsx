'use client';

import { MessageCircleMore } from 'lucide-react';
import { Button } from '../ui/button';

export default function UserInteractionButtons() {
  return (
    <div className="flex flex-row items-center">
      <Button>
        <MessageCircleMore />
        <span>메시지</span>
      </Button>
    </div>
  );
}
