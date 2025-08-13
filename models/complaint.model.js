import { config } from "dotenv";
import connectToDB from '../DB/connectToDB.js'
config()

const collection = process.env.COLLECTION;

export async function postComplaint(data) {
    const db = await connectToDB();
    let result;
    try {
        result = await db.collection(collection).insertOne(data);
        return result
    } catch (error) {
        console.log('postComplaint DAL  req_failed:\n', error.message)
    }

}


export async function getComplaints() {
    const db = await connectToDB()
    let result;
    try {
        result = await db.collection(collection).find({}).toArray();

    } catch (error) {
        console.log('getcomplaints DAL request failed:\n', error.message)
    }

    return result;
}
