import express from 'express'
import mongoose from 'mongoose'
import blogrouter from '../backend/routes/BlogRoutes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://samuvelraja072:YdNajbEYhFikE8bP@cluster0.ufzjt8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("Database connected")).catch((err)=>console.log(err))
app.use('/',blogrouter)

app.listen(5000)
