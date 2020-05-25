import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from "@nestjs/passport";


@Controller()
export class AppController {
    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return req.user;
    }

    constructor(private readonly appService: AppService) {
    }

    @Get('hello')
    getHello(): string {
        return this.appService.getHello();
    }
}
