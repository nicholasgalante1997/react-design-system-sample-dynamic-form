import { Request, Response } from 'express';
import { pages as defaultConfig } from '../../formconfigs';

export function default_form_handler(_req: Request, res: Response) {
  res.status(200).json({ form: defaultConfig });
}
