import {Injectable, Logger} from '@nestjs/common';
import {Event} from "./event.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class EventsService {

    // private logger = new Logger('Agent Controller');

    constructor(
        @InjectRepository(Event)
        private eventsRepository: Repository<Event>,
    ) {
    }

    intro() {
        return "Events ..."
    }

    async findById(id: number): Promise<Event | undefined> {
        return this.eventsRepository.findOne({where: {id,}});
    }

    async createEvent(name: string) {
        console.log(name)
        // this.logger.log(name)
        const event = new Event();
        event.eventName = name;
        await event.save();
    }
    
}
