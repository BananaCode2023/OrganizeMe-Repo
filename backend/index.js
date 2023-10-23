const express = require('express')
const cors = require('cors')
const {mongoose} = require('mongoose')
const userRouter = require('./Routes/Authentication')
const tasklistRouter = require('./Routes/Tasklist')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config()


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


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to the Database'))
.catch((err) => console.log('Database not connected', err))

app.listen(3333, () => {
  console.log("OrganizeMe Server Started")
})