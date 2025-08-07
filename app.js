import express from 'express';
import { config } from 'dotenv';

config()

const port = process.env.SERVER_PORT

const app = express();




app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})