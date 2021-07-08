import nextConnect from "next-connect"
import { MongoClient } from 'mongodb';
const client = new MongoClient("mongodb+srv://alyaxi:alyaxi123@mct.rd1yc.mongodb.net/MCT?retryWrites=true&w=majority", {
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