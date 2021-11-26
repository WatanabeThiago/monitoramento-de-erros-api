import AppError from '@shared/errors/AppError';
import { Request } from 'express';
import multer from 'multer';

const fileFilter = (
  request: Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback,
): void => {
  if (file.mimetype.includes('image')) {
    return callback(null, true);
  }

  if (file.mimetype.includes('audio')) {
    return callback(null, true);
  }

  return callback(new AppError('Formato de um dos arquivos inválido'));
};

export default fileFilter;
