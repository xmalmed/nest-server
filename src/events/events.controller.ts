import {Body, Controller, Get, Logger, Param, Post} from '@nestjs/common';
import { EventsService } from "./events.service";


@Controller('events')
export class EventsController {

    constructor(private eventsService: EventsService) {
    }

    @Get()
    getEvents(){
        return this.eventsService.intro()
    }

    @Get(':id')
    getById(@Param() params){
        return this.eventsService.findById(params.id)
    }

    @Post()
    createEvent(@Body('eventName') kadsojenc){
        console.log(kadsojenc)
        this.eventsService.createEvent(kadsojenc)
    }
}
