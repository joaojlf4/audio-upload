import express, { Express } from 'express';
import routes from './routes/index.routes';

class App{
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }

  middlewares() {

  }

  server: Express
}

export default new App().server;