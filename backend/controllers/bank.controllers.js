import { Request } from "../models/bank.models.js";

// Create a REQUEST
const createRequest = async(req, res) => {
    try {
        const { name, email, message} = req.body

        if(!name || !email || !message) {
            return res.status(400).json({
                message: "Please fill up all the field so we can contact you!"
            });
        }

        const request = await Request.create({name, email, message});

        res.status(201).json({
            message: "Your request has been send", request
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
};

export {
    createRequest
}