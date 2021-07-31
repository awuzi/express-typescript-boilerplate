import express, { Application } from 'express'
import { routes } from './routes/'

// Boot express
export const app: Application = express()
export const v1: Application = express()

app.use('/api/v1', v1);

// Application routing
routes(v1)

const port = 4000
// Start server
app.listen(port, () => console.log(`Server is listening on port ${port} !`))
