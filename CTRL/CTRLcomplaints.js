import {postComplaint} from '../models/complaint.model.js'


export async function sendComplaint(req, res) {
    try {
        await postComplaint(req.body)
        res.status(200).json({ msg: "complaint sent" })
    } catch (err) {
        console.log('post_complaint failed:',err.message)
        res.status(500).send('sendComplaint failed')
    }
}



