import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';

export async function POST(request: Request) {
  const { filename, contentType } = await request.json();
  try {
    const client = new S3Client();
    const key = randomUUID();

    const command = new PutObjectCommand({ Bucket: process.env.AWS_BUCKET_NAME, Key: key, ContentType: contentType });
    const url = await getSignedUrl(client, command, { expiresIn: 3600 });

    return Response.json({ url, key });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
}
