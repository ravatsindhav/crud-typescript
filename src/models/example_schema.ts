// const mongoose = require('mongoose')
import mongoose from 'mongoose'
const exampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    }
});
// Example =
export const ravat=mongoose.model('rushabh', exampleSchema)
export class Example{}