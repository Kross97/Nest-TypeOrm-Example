import {ArgumentsHost, Catch, ExceptionFilter} from "@nestjs/common";
import {Request, Response} from "express";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        //const response = ctx.getResponse<Response>();

        console.log('GLOBAL EXCEPTION URL', request.originalUrl);
    }
}