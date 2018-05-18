import { Router } from 'express'
import playground from 'graphql-playground-middleware-express'

import config from 'sundry-graphql/src/config'

const playgroundExpressMiddleware = () => {
    const endpoint = `http://localhost:${config.GRAPHQL_PORT}/graphql`
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
