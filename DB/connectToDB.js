import { MongoClient } from "mongodb";
import { config } from "dotenv";

config()

const url = process.env.DB_URL;
const client = new MongoClient(url);

const dbName = process.env.DB_NAME;
let db;

// ---- TODO - in case an error has occur the func will return 'undefined'


export default async function connectToDB() {
    if (db) return db;

    try {
        await client.connect(dbName);
        console.log('Connected successfully to mongo db');
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.log('failed connecting to db', error.message)

    }


}