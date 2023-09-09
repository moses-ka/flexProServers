import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()
const uri=process.env.MONGODB_URI
const client = new MongoClient(uri)
client.connect().then(()=>{
    console.log("database connected")
   
})
.catch(err => console.log(err))
const db=client.db("flexpro")

export default db
