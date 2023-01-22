import {BadRequestException, Controller, Get, UseFilters} from '@nestjs/common'
import {UsersService} from "./users.service";
import {UsersExceptionFilter} from "./filters/usersExceptionFilter";

@UseFilters(UsersExceptionFilter)
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    baseMethodUsers() {
        return 'action base  method users';
    }

    @Get('/allUser')
    findAllUsers() {
        return this.usersService.findAllUsers();
    }

    @Get('/usersError')
    errorUsers() {
        throw new BadRequestException('Test_Error');
    }
};