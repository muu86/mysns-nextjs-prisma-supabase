import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import UsernameInput from './username-input';

export default function UsernameCard() {
  return (
    <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        {/* <CardTitle>닉네임</CardTitle> */}
        <CardDescription>닉네임을 설정해주세요</CardDescription>
      </CardHeader>
      <CardContent>
        <UsernameInput />
      </CardContent>
    </Card>
  );
}
