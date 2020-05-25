import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

// export type User = any;


@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({where: {username,}});
    }

}
