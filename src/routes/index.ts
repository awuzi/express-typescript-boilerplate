import express, { Application, Router } from 'express'
import { routes as pingRoute } from './ping.route'

export const v1 = express.Router()


const _routes: [string, Router][] = [
  ['/', pingRoute()]
]

/**
 * @prefix /api/v1/
 */
export const routes = () => {
  _routes
    .forEach(([endpoint, route]) => {
      v1.use(endpoint, route)
    })
}
