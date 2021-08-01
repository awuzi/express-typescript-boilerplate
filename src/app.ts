import express, { Application } from 'express'
import { v1, routes } from './routes'

// Boot express
export const app: Application = express()

app.use('/api/v1', v1);

// Application routing
routes()

const port = 4000
// Start server
app.listen(port, () => console.log(`Server is listening on port ${port} !`))
