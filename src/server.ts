import express, { Request, Response } from 'express';
import { createServer } from 'http';
import path from 'path';
import cors from 'cors';
import { trace } from './middleware';
import { metrics_render_handler } from './handlers/metrics/render';
import { default_form_handler, beta_form_handler } from './handlers/form';
import { logger } from './utils';

function echo_on_post(req: Request, res: Response) {
  logger.info(req.body);
  res.status(201).end();
}

const expressServer = express();

expressServer.use(cors());
expressServer.use(express.json());
expressServer.use(trace({ verbose: true }));
expressServer.use('/app', express.static(path.resolve(process.cwd(), 'build', 'static')));

expressServer.get('/forms/inventory/default', default_form_handler);
expressServer.get('/forms/inventory/beta', beta_form_handler);
expressServer.post('/forms/submit', echo_on_post);
expressServer.post('/api/metrics/render', metrics_render_handler);

export const server = createServer(expressServer);
