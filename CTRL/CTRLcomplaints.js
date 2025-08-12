import { postComplaint, getComplaints } from "../DAL/complaintDAL.js";



export async function sendComplaint(req, res) {
    try {
        console.log(typeof req.body)
        await postComplaint({complaint : req.body})
        res.status(200).json({ msg: "complaint sent" })
    } catch (err) {
        console.log('post_complaint failed:',err)
        res.status(500).send('sendComplaint failed')
    }
}

export async function getAllComplaints(req, res) {
    try {
        const complaints = await getComplaints()
        res.status(200).json({">>>" : complaints})
    } catch (err) {
        console.log('get_complaint failed:',err)
        res.status(500).send('getAllComplaints failed')
    }
}

