import express from "express";
import mongoose from "mongoose"
import cors from 'cors'
const app = express();
import dotenv from "dotenv";

const url = 'mongodb://ravat:ravatS@localhost:27017/Example'
// url = 'mongodb://username:password@localhost:port/databasename'
 app.use(cors());
app.use(express.urlencoded({
    extended: true,
    inflate: true,
    limit: '100kb',
    parameterLimit: 1000,
    type: 'application/x-www-form-urlencoded',
    verify: undefined
}));
app.use(express.json());

mongoose.connect(url, { useNewUrlParser: true })
mongoose.Promise = global.Promise;
const con = mongoose.connection

// const port = 8080; // default port to listen

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const API_KEY = process.env.API_KEY;
//  const exampleRouter = require('./routes/example')
import * as rout from './routes/example'
import * as user from './routes/user/user_rout'
app.use('/example', rout.rout as any)
app.use('/user', user.Userrout as any)
// define a route handler for the default home page
app.get( "/", ( req:any, res:any ) => {
    res.send(`<b>Hello</b>`);
} );

// start the Express server
app.listen( port, () => {
    print_log(`server started Successfully at :  http://localhost:${ port }`);
} );

export function print_log(value:any){
    console.log("\x1b[32m", value );
}

export class Data {
    _id: string;
    name: string;
    surname: string;
    // __v: number;
}

// document.getElementById("json").textContent = JSON.stringify(new Data, undefined, 2);
// export const jsonview =`<pre id="json"></pre>`;