import nextConnect from "next-connect"
import { MongoClient } from 'mongodb';
const dotenv = require("dotenv")
dotenv.config()
const client = new MongoClient(process.env.MONGODB_QUERY_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

async function database (req, res, next){
    if(!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db("MCT");
    return next()
}

const middleware = nextConnect()

middleware.use(database);

export default middleware