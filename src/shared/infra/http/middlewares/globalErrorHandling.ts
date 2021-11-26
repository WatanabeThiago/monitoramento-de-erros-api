/* eslint-disable  @typescript-eslint/no-explicit-any */
import { CelebrateError } from 'celebrate';
import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';

import winston from '@config/winston';

export default async function globalErrorHandling(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Promise<any> {
  if (err instanceof AppError) {
    console.log(err);
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      errorName: err.errorName,
    });
  }

  if (err instanceof CelebrateError) {
    winston.error(
      `${400} - ${err.details.values().next().value.details[0].message} - ${
        request.originalUrl
      }}`,
    );

    let messageString;
    const { type, context } = err.details.values().next().value.details[0];

    const translatedField = context.key.replace('_', ' ');

    switch (type) {
      case 'any.required':
        messageString = `O campo ${translatedField} é obrigatório.`;
        break;
      case 'string.base':
        messageString = `O campo ${translatedField} deve ser do tipo texto.`;
        break;
      case 'string.empty':
        messageString = `O campo ${translatedField} não pode ser um texto vazio.`;
        break;
      case 'string.min':
        messageString = `O campo ${translatedField} não pode ser menor que ${context.limit} caracteres.`;
        break;
      case 'string.max':
        messageString = `O campo ${translatedField} não pode ser maior que ${context.limit} caracteres.`;
        break;
      case 'string.email':
        messageString = `O campo ${translatedField} deve ser um email válido.`;
        break;
      case 'number.base':
        messageString = `O campo ${translatedField} deve ser do tipo número.`;
        break;
      case 'number.min':
        messageString = `O campo ${translatedField} não pode ser menor que ${context.limit}.`;
        break;
      case 'number.max':
        messageString = `O campo ${translatedField} não pode ser maior que ${context.limit}.`;
        break;
      case 'array.base':
        messageString = `O campo ${translatedField} deve ser do tipo array.`;
        break;
      case 'array.empty':
        messageString = `O campo ${translatedField} não pode ser vazio.`;
        break;
      case 'array.min':
        messageString = `O campo ${translatedField} não pode ter um tamanho menor que ${context.limit}.`;
        break;
      case 'array.max':
        messageString = `O campo ${translatedField} não podeer um tamanho maior que ${context.limit}.`;
        break;
      case 'document.cpf':
        messageString = `O CPF é inválido.`;
        break;
      case 'date.base':
        messageString = `Por favor insira uma data válida`;
        break;
      default:
        messageString = 'Aconteceu um erro tente novamente mais tarde.';
        break;
    }

    return response.status(400).json({
      status: 'error',
      message: messageString,
    });
  }

  winston.error(`${500} - ${err.message}`);

  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
}
