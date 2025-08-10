import express from 'express';
import { config } from 'dotenv';
import complaintRouter from './routes/RT_complains.js';

config()

const port = process.env.SERVER_PORT

const app = express();
app.use(express.json())
app.use(express.static('./public'))
app.use('/complaint',complaintRouter)




app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})