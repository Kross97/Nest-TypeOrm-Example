import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common'
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {UsersLoggerMiddleware} from "./middlewares/usersLogger";


@Module({
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UsersLoggerMiddleware).forRoutes(UsersController)
    }
}