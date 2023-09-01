import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import express from "express";

const app = express()


app.use(express.json())
app.use("/api/posts", postRoutes) 
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)


app.get("/test", (req,res)=>{
    res.json("it works")
})

app.listen(8801,()=>{
    console.log("connected to DB")
})