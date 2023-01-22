import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    private users = [{ name: 'name1'}, { name: 'name2'}];

    findAllUsers() {
        return this.users;
    }
}