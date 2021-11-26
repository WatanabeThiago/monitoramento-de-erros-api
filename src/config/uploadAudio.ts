import path from 'path';
import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfig {
  driver: 's3' | 'disk';

  tmpFolder: string;
  uploadsFolder: string;

  multer: {
    disk: StorageEngine;
    s3: StorageEngine;
  };

  config: {
    aws: {
      bucket: string;
    };
  };
}

const spacesEndpoint = new aws.Endpoint(
  `${process.env.DIGITAL_OCEAN_ENDPOINT}`,
);

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  multer: {
    disk: multer.diskStorage({
      destination: path.resolve(tmpFolder, 'uploads'),
      filename: (request, file, callback) => {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const filename = `${fileHash}-${file.originalname
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')}`;

        return callback(null, filename);
      },
    }),
    s3: multerS3({
      s3: new aws.S3({
        endpoint: spacesEndpoint,
        accessKeyId: process.env.DIGITAL_OCEAN_ACCESS_KEY,
        secretAccessKey: process.env.DIGITAL_OCEAN_SECRET_ACCESS_KEY,
        httpOptions: {
          timeout: 0,
        },
      }),
      bucket: process.env.DIGITAL_OCEAN_BUCKET as string,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      key: (request, file, callback) => {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const filename = `${fileHash}-${file.originalname
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')}`;

        return callback(null, filename);
      },
    }),
  },

  config: {
    aws: {
      bucket: process.env.DIGITAL_OCEAN_BUCKET,
    },
  },
} as IUploadConfig;
