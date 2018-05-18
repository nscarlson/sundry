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

const app = express()

app.use(graphqlExpressMiddleware())
app.use(playgroundExpressMiddleware())

app.listen(3000, () => {
    console.info(`GraphQL server listening on port 3000`)
})
