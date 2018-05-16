import bodyParser from 'body-parser'
import { Router } from 'express'
import { graphqlExpress } from 'apollo-server-express'

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const graphqlExpressMiddleware = () => {
    router.use(bodyParser.json())
    router.use('/graphql',
        bodyParser.json(),
        graphqlExpress({
            schema
        },
    ))

    return router
}

export default graphqlExpressMiddleware
