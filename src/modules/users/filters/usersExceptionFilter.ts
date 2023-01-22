import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import { Request, Response } from 'express';

@Catch()
export class UsersExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();

        response.status(exception.getStatus()).json({
            statusCode: exception.getStatus(),
            text: exception.message,
            timestamp: new Date().toISOString(),
            path: request.url,
        })
    }
}