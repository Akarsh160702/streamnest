import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

// Configure AWS SDK
const s3Client = new S3Client({
  region: 'YOUR_AWS_REGION',
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
  }
});

export const uploadToS3 = async (file: File, fileName: string): Promise<string> => {
  const params = {
    Bucket: 'YOUR_S3_BUCKET_NAME',
    Key: fileName,
    Body: file,
    ContentType: file.type
  };

  try {
    const upload = new Upload({
      client: s3Client,
      params: params
    });

    const result = await upload.done();
    return result.Location as string;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};