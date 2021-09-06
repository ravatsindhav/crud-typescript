import mongoose from 'mongoose'
const exampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
// Example =
export const user=mongoose.model('UserData', exampleSchema)
export class UserData{}