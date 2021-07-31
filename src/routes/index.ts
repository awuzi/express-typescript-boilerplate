import { Application, Router } from 'express'
import { routes as pingRoute } from './ping.route'

const _routes: [string, Router][] = [
    ['/', pingRoute()],
]

/**
 * @prefix /api/v1/
 */
export const routes = (app: Application) => {
    _routes
        .forEach(([endpoint, router]) => {
            app.use(endpoint, router)
        })
}
