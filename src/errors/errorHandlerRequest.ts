import { Request, Response, NextFunction} from 'express';
export const errorHandlerRequest = (error: any, req: Request, res: Response, next: NextFunction) => {
    if(error) {
        return res.status(500).json({
            message: "Ocorreu um problema na requisição"
        })
    }

    next();
}
