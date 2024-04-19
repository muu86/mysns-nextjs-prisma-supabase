'use server';

import { randomUUID } from 'crypto';
import { stringify } from 'querystring';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function getPresignedUrlForPut() {
  const param = {
    key: randomUUID(),
  };
  const response = await fetch(`${process.env.API_GATEWAY}/presigned?${stringify(param)}`);
  const result = await response.json();

  return {
    key: param.key,
    signedUrl: result.url,
  };
}

export async function getPresignedUrlForGet(key: string) {
  const s3 = new S3Client({});

  const prefix = ['raw', 'lg', 'md', 'sm'];
  const promises = prefix.map((p) => {
    const command = new GetObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: `${p}/${key}`,
    });
    return getSignedUrl(s3, command);
  });
  const urls = await Promise.all(promises);

  return {
    raw: urls[0],
    lg: urls[1],
    md: urls[2],
    sm: urls[3],
  };
}
