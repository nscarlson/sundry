import { graphqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import { Router } from 'express'
import { buildSchema } from 'graphql-tools'

const typeDefs = buildSchema(`
    type Query {
        hello: String
    }
`)

const graphqlExpressMiddleware = () => {
    const router = new Router()

    router.use(
        '/graphql',
        bodyParser.json(),
        graphqlExpress({
            schema,
        }),
    )

    return router
}

export default graphqlExpressMiddleware
