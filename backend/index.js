const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./Routes/Authentication')
const tasklistRouter = require('./Routes/Tasklist')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
app.use(express.json())
app.use('/auth', userRouter)
app.use('/tasklist', tasklistRouter )
app.use(cookieParser())

mongoose.connect('mongodb+srv://peterjohnreyes0326:OrganizeMe123@cluster0.afcph1e.mongodb.net/?retryWrites=true&w=majority')


app.listen(3333, () => {
  console.log("OrganizeMe Server Started")
})