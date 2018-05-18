import { graphqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import { Router } from 'express'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: { hello: () => 'Hello World!' },
}

const myGraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const graphqlExpressMiddleware = () => {
    const router = new Router()

    router.use(
        '/graphql',
        bodyParser.json(),
        graphqlExpress({
            schema: myGraphQLSchema,
        }),
    )

    return router
}

export default graphqlExpressMiddleware
