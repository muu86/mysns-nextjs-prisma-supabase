'use server';

import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';

// export async function getPresignedUrlForPut() {
//   const s3 = new S3Client();
//   const key = randomUUID();

//   const command = new PutObjectCommand({
//     Bucket: process.env.BUCKET_NAME,
//     Key: `raw/${key}`,
//   });
//   const url = await getSignedUrl(s3, command, { expiresIn: 60 });
//   return {
//     key,
//     signedUrl: url,
//   };
// }

// export async function getPresignedUrlForGet(key: string) {
//   const s3 = new S3Client({});

//   const prefix = ['raw', 'lg', 'md', 'sm'];
//   const promises = prefix.map((p) => {
//     const command = new GetObjectCommand({
//       Bucket: process.env.BUCKET_NAME,
//       Key: `${p}/${key}`,
//     });
//     return getSignedUrl(s3, command);
//   });
//   const urls = await Promise.all(promises);

//   return {
//     raw: urls[0],
//     lg: urls[1],
//     md: urls[2],
//     sm: urls[3],
//   };
// }

export async function getSignedUrlForPut(filename: string, contentType: string) {
  // const { filename, contentType } = await request.json();
  try {
    const client = new S3Client();
    const key = randomUUID();

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `raw/${key}`,
      ContentType: contentType,
    });
    const url = await getSignedUrl(client, command, { expiresIn: 3600 });

    console.log(process.env.AWS_ACCESS_KEY_ID);
    console.log(process.env.AWS_SECRET_ACCESS_KEY);
    console.log(url);

    return {
      url,
      key,
      data: {
        id: process.env.AWS_ACCESS_KEY_ID,
        key: process.env.AWS_SECRET_ACCESS_KEY,
      },
    };
  } catch (error: any) {
    return { error: error.message };
  }
}
