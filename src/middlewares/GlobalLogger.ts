import {Injectable, NestMiddleware} from "@nestjs/common";
import { Request, Response, NextFunction} from 'express';

@Injectable()
export class GlobalLogger implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('REQUEST GLOBAL DATA: 1. baseUrl', req.baseUrl, '2. originalUrl', req.originalUrl, '3. methodName', req.method);
        next();
    }
}