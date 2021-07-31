import { NextFunction, Request, Response } from 'express'

export const controller = () => {

    const hello = (req: Request, res: Response, next: NextFunction): void => {
        res.send('tout est ok')
    }

    return {
        hello
    }

}
