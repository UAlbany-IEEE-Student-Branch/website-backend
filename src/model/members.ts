import {dbQuery} from '../database/db';

export type Members = {
    id: number;
    first_name: string;
    last_name: string;
    role: string;
    position: string;
    linkedIn: string;
    start_year: number;
    end_year: number;
    image: string;
}

const getAllMembers = async ()=>{
    try {
        const values = await dbQuery(`SELECT * FROM Members`);
        return values as Members[];
    } catch (error) {
        throw error;
    }
}

const getEboardMembers = async () => {
    try {
        const values = await dbQuery(`SELECT * FROM Members WHERE role = 'Eboard'`);
        return values as Members[];
    } catch (error) {
        throw error;
    }
}

const getJboardMembers = async () => {
    try {
        const values = await dbQuery(`SELECT * FROM Members WHERE role = 'Jboard'`);
        return values as Members[];
    } catch (error) {
        throw error;
    }
}

const getDboardMembers = async () => {
    try {
        const values = await dbQuery(`SELECT * FROM Members WHERE role = 'Dboard'`);
        return values as Members[];
    } catch (error) {
        throw error;
    }
}

export const memberModel = {
    getAllMembers,
    getEboardMembers,
    getJboardMembers,
    getDboardMembers
}
