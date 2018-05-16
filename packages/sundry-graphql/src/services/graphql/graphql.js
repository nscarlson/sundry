import 'isomorphic-fetch'
import 'source-map-support/register'

import compression from 'compression'
import express from 'express'

import {
    graphqlExpressMiddleware,
    playgroundExpressMiddleware,
    staticFilesMiddleware,
} from './services/middleware'

const server = express()

server.use(compression)

server.listen(3000, () => {
    console.info(`GraphQL server listening on port 3000`)
})
