/* eslint-disable import/prefer-default-export */
import 'reflect-metadata';
import 'dotenv/config';

import express, { request } from 'express';
import cors from 'cors';
import 'express-async-errors';
import uploadConfig from '@config/upload';
import http from 'http';
import routes from './routes';

// import '@shared/infra/typeorm';
import '@shared/container';
import socketIO from '../socketIO';
import globalErrorHandling from './middlewares/globalErrorHandling';

const app = express();
const server = http.createServer(app);
const appSocketServer = socketIO(server, request);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);

app.use(globalErrorHandling);

server.listen(process.env.PORT || 3337, async () => {
  /* eslint-disable no-console */
  console.log(`🚀 Server started on port ${process.env.PORT || 3337}!`);
});

export { appSocketServer };
