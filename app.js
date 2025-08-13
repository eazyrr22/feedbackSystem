import express from 'express';
import { config } from 'dotenv';
import complaintRouter from './routes/RT_complaints.js';
import adminRouter from './routes/RT_admin.js'

config()

const port = process.env.SERVER_PORT

const app = express();
app.use(express.urlencoded({ extended: true })); 
app.use(express.json())
app.use(express.static('./public'))
app.use('/complaint',complaintRouter)
app.use('/admin',adminRouter)





app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})