import sqlite3 from 'sqlite3';

const DATABASE_FILE: string = './ieee_info.db';
export const dbQuery = async (query: string, params?: any[]) => {

    const process = new Promise<any[]>((resolve, reject) => {
        let db = new sqlite3.Database(DATABASE_FILE, (err) => {
            if (err) {
                console.error(err.message);
                reject(err);
            }
            console.log(`Connection to the in-memory SQL`);
        });

        db.all(query, params, (err, rows) => {
            if (err) {
                reject(err);
            } else {  
                resolve(rows);
            }
        });

        db.close(error => {
            console.log(`DB closed`);
        });
    });

    return process;
}
