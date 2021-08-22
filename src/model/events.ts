import {dbQuery} from '../database/db';

export type Events ={
    id: number;
    event_name: string;
    image: string;
    year: number;
    month: number;
    day: number;
    past_status: number;
}

const getAllEvents = async () =>{
    try {
        const values = await dbQuery(`SELECT * FROM Events`);
        return values as Events[];
    } catch (error) {
        throw error;
    }
}

export const eventModel ={
    getAllEvents
}
