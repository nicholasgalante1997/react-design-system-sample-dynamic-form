import express from 'express'
import { createServer } from 'http'
import cors from 'cors'
import { trace } from './middleware'

const expressServer = express()

expressServer.use(cors())
expressServer.use(express.json())
expressServer.use(trace({ verbose: true }))

export const server = createServer(expressServer)
