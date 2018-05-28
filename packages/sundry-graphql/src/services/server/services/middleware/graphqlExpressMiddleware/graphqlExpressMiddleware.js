import { graphqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
//import dataSources from 'sundry-graphql/src/services/dataSources'
import { Router } from 'express'
import gramps from '@gramps/gramps'
import { makeExecutableSchema } from 'graphql-tools'

import sundry from 'data-source-sundry'

const GraphQLOptions = gramps({
    dataSources: [sundry],
    enableMockData: true,
})

const graphqlExpressMiddleware = () => {
    const router = new Router()

    router.use(bodyParser.json())
    router.use('/graphql', graphqlExpress(GraphQLOptions))

    return router
}

export default graphqlExpressMiddleware
