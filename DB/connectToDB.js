import { MongoClient } from "mongodb";
import { config } from "dotenv";

config()

const url = process.env.DB_URL;
const client = new MongoClient(url);

const dbName = "complaints";
let db;

// ---- TODO - in case an error has occur the func will return 'undefined'

export default async function connectToDB() {
    if (!db) {
        try {
            await client.connect();
            console.log('Connected successfully to server');
            const db = client.db(dbName);

        } catch (error) {
            console.log('failed connecting to db', error.message)
        }
        return db;
    }
}