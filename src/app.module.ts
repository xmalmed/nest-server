import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Connection } from 'typeorm';
import { EventsModule } from './events/events.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db-test',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true, // should be false to have better control over db structure
        }),
        AuthModule,
        UsersModule,
        EventsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    // constructor(private connection: Connection) {}
}

