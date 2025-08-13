import {getComplaints} from "../models/complaint.model.js";

export async function getAllComplaints(req, res) {
    try {
        const complaints = await getComplaints()
        res.status(200).json({"complaints" : complaints})
    } catch (err) {
        console.log('get_complaints failed:',err)
        res.status(500).json({error:'getAllComplaints failed'})
    }
}


export async function accessError(req,res){
    console.log('aaa')
    res.send('username or password incorrect please try again')
}
