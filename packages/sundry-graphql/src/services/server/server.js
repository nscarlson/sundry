import 'isomorphic-fetch'
import 'source-map-support/register'

import express from 'express'
import config from 'sundry-graphql/src/config'

import {
    graphqlExpressMiddleware,
    playgroundExpressMiddleware,
    staticFilesMiddleware,
} from './services/middleware'
import { graphqlExpress } from 'apollo-server-express'

const server = express()

server.use(graphqlExpressMiddleware(), playgroundExpressMiddleware())

server.listen(3000, () => {
    console.info(`GraphQL server listening on port 3000`)
})
