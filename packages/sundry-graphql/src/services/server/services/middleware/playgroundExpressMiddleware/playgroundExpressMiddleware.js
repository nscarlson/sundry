import { Router } from 'express'
import playground from 'graphql-playground-middleware-express'

import { GRAPHQL_PORT } from 'sundry-graphql/src/config'

const playgroundExpressMiddleware = () => {
    const endpoint = `http://localhost:${GRAPHQL_PORT}`
    const router = new Router()

    router.use(
        '/playground',
        playground({
            endpoint,
        }),
    )

    return router
}

export default playgroundExpressMiddleware
