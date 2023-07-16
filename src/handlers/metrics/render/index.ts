import { Request, Response } from 'express';

export async function metrics_render_handler(req: Request, res: Response) {
  const { id, ...rest } = req.body;
}
