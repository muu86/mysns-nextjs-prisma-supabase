import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Preview from './preview';

export default function Upload() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>이미지 업로드</CardTitle>
        <CardDescription>이미지 업로드입니다</CardDescription>
      </CardHeader>
      <CardContent>
        <Preview />
      </CardContent>
    </Card>
  );
}
