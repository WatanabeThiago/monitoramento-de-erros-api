/* eslint-disable @typescript-eslint/naming-convention */
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    io: {
      connectedUsers: { [key: string]: string };
      server: import('socket.io').Server<DefaultEventsMap, DefaultEventsMap>;
    };
    file: {
      location: any;
      filename: any;
      path: any;
    };
  }
}
