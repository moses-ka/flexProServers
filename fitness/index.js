import express from "express"
import dotenv from "dotenv"
import router from "./Router.js";
import cors from "cors";
dotenv.config()

const app = express();
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3001

app.use("/exercises", router)

app.listen(port, () => {
    console.log("server is running on port", port)
})