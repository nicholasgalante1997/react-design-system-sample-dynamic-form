import { pages as betaConfig } from '../../formconfigs/beta';
import { Request, Response } from 'express';

export function beta_form_handler(_req: Request, res: Response) {
  res.status(200).json({ form: betaConfig });
}
