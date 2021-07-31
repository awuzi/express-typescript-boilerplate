import express, { Router } from 'express'
import { controller as pingController } from '../controllers/ping.controller'

const router: Router = express.Router()

export const routes = () => {
    const c = pingController()

    router.route('/').get(c.hello)

    return router
}
