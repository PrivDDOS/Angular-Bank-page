import mongoose, {Schema} from "mongoose";

const requestSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            minLength: 1,
            maxLength: 30, 
        },

        email: {
            type: String,
            required: true,
            unique: true,
            minLength: 6,
            maxLength: 30,
        },

        message: {
            type: String,
            required: true,
            maxLength: 1000,
        }
    },

    {
        timestamps: true
    }
)

export const Request = mongoose.model('Request', requestSchema)