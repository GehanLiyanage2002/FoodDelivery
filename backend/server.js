import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRoute from "./routes/foodRoute.js"


const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

// DB Connection

connectDB();

//API EndPoints

app.use("/api/food",foodRoute)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server Started on http://localhost:${port}`)
})

// 