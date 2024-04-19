import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Preview from './preview';

export default function UploadCard() {
  return (
    <div className="col-span-3 grid auto-rows-max items-start gap-4 lg:gap-8">
      <Card className="overflow-hidden">
        <CardHeader>
          {/* <CardTitle>이미지 업로드</CardTitle> */}
          <CardDescription>이미지 업로드하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Preview />
        </CardContent>
      </Card>
    </div>
  );
}
