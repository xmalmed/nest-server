import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Controller('users')
export class UsersController {
    constructor(private readonly psafgdfgd: UsersService) {}

    @Get()
    dsakjdsaukskjdfe() {
        return this.psafgdfgd.findAll()
    }

    @Get(':username')
    sidemrbsafsanmaerweafr(@Param() params) {
        return this.psafgdfgd.findOne(params.username)
    }
}
