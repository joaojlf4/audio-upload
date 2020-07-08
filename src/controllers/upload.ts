import { Request, Response } from 'express';

export default {
  async store(req: Request, res: Response) {
    console.log()
    res.send(req.body)
  }
}