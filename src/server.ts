import express from 'express';
import { createServer } from 'http';
import path from 'path';
import cors from 'cors';
import { trace } from './middleware';
import { metrics_render_handler } from './handlers/metrics/render';

const expressServer = express();

expressServer.use(cors());
expressServer.use(express.json());
expressServer.use(trace({ verbose: true }));
expressServer.use('/app', express.static(path.resolve(process.cwd(), 'build', 'static')));

expressServer.post('/api/metrics/render', metrics_render_handler);

export const server = createServer(expressServer);
