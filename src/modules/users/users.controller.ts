import {BadRequestException, Controller, Get, Param, UseFilters, UsePipes} from '@nestjs/common'
import {UsersService} from "./users.service";
import {UsersExceptionFilter} from "./filters/usersExceptionFilter";
import {PipeIdToUser} from "./pipes/pipeIdToUser";

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

    @Get('/all/:id')
    findPipeUser(@Param('id', PipeIdToUser) userToPipe) {
      return userToPipe;
    }

    @Get('/all2/:id')
    @UsePipes(PipeIdToUser)
    findPipeUsers2(@Param('id') id) {
        return id;
    }

    @Get('/usersError')
    errorUsers() {
        throw new BadRequestException('Test_Error');
    }
};