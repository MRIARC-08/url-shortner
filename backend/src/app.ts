import express from "express";
import type { Express } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app : Express= express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
 

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())




import urlRouter from "./routers/URL.routers"

app.use("/c", urlRouter )

app.use("/r", urlRouter)

export {app}