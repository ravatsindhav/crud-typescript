import express from "express";
import mongoose from "mongoose"
import mongodb from "mongodb";
// var mongodb = require('mongodb');

 const dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/Example');

const urlencodedParser = express.urlencoded({ extended: false })
const jsonParser = express.json()
const router = express.Router()
// const Example = require('../models/example_schema')
import * as Example from '../models/example_schema'
// get All
router.get('/', async (req, res) => {
    try {
        const example = await Example.ravat.find()
        delete example.__v;
        res.json(example)

    } catch (err) {
        res.send('Error' + err)
    }
})
// get by ID
router.get('/:id', async (req, res) => {
    try {
        const example = await Example.ravat.findById(req.params.id);
        // delete example._v;
        const dt=new Data()
        dt._id=example._id
        dt.name=example.name
        dt.surname=example.surname
        res.json(dt)

    } catch (err) {
        res.send('Error' + err)
    }
})
// Post Data
router.post('/', jsonParser, async (req, res) => {
    res.send(dbConn.then((db:any)=> {
        db.collection('examples').insertOne(req.body);
    }));

    // old
    //     res.send("Post Rout done")
    //     JSON.stringify(req)
    //     res.send(req.body)
    //    console.log(req)
    // const exppost = new Example.ravat({
    //     name: req.body.name,
    //     surname: req.body.surname
    // })
    // try {
    //     const e1 = await exppost.save()
    //      res.json(e1)
    //     // res.status(400).json(e1)
    // } catch (err) {
    //     res.send('Error' + err)
    // }
})
// update data
// router.patch('/:id', jsonParser, async (req, res) => {

//     // const exppost =new Example({
//     //     name:req.body.name,
//     //     surname:req.body.surname
//     // })
//     try {
//         const data = await Example.findById(req.params.id)
//         data.name = req.body.name
//         data.surname = req.body.surname
//         const saveresult = await data.save()
//         res.json(saveresult)
//     } catch (err) {
//         res.send('Error' + err)
//     }
// })
// for delete
// router.delete('/:id', async (req, res) => {
//     try {
//         const data = await Example.findById(req.params.id)
//         const saveresult = await data.remove()
//         if (saveresult) {
//             const del = await Example.findById(req.params.id)
//             if (!del)
//                 res.send(true)
//         }

//     } catch (err) {
//         res.send('Error' + err)
//     }
// })
export const rout= router;
// export const ravat=mongoose.model('Ravat', exampleSchema)
export class Routes{}
// router.use(express.urlencoded({
//     extended: true,
//     inflate: true,
//     limit: '100kb',
//     parameterLimit: 1000,
//     type: 'application/x-www-form-urlencoded',
//     verify: undefined
// }));
export class Data {
    _id: string;
    name: string;
    surname: string;
    // __v: number;
}