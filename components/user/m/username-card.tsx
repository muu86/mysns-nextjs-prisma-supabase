import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import UsernameInput from './username-input';

export default function UsernameCard() {
  return (
    <div className="grid auto-rows-max items-start gap-4 col-span-3 lg:gap-8">
      <Card>
        <CardHeader>
          {/* <CardTitle>닉네임</CardTitle> */}
          <CardDescription>닉네임을 설정해주세요</CardDescription>
        </CardHeader>
        <CardContent>
          <UsernameInput />
        </CardContent>
      </Card>
    </div>
  );
}
