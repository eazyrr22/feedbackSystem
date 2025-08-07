import { config } from "dotenv";
config()

const collection = process.env.COLLECTION;

export async function postComplaint(data) {
    const db = await connectToDB();
    let result;
    try {
        result = await db.collection(collection).insertOne(data);
        return result.insertedId;
    } catch (error) {
        console.log('addItem_post riddle req_failed:\n', error.message)
    }

}


export async function getComplaints() {
    const db = await connectToDB()
    let result;
    try {
        result = await db.collection(collection).find({}).toArray();

    } catch (error) {
        console.log('getRiddles_find request failed:\n', error.message)
    }

    return result;
}
