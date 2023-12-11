/* This code is importing the necessary modules and libraries for the Express application. */
const express = require('express')
const cors = require('cors')
const {mongoose} = require('mongoose')
const userRouter = require('./Routes/Authentication')
const tasklistRouter = require('./Routes/Tasklist')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config()


const app = express()

/* The `app.use(cors(...))` function is setting up Cross-Origin Resource Sharing (CORS) for the Express
application. */
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
/* `app.use(express.json())` is a middleware that parses incoming requests with JSON payloads. It
allows the application to access the request body as a JavaScript object. */
app.use(express.json())
app.use('/auth', userRouter)
app.use('/tasklist', tasklistRouter )
app.use(cookieParser())


/* The code `mongoose.connect(process.env.MONGO_URL)` is connecting the application to a MongoDB
database using the URL specified in the `MONGO_URL` environment variable. */
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to the Database'))
.catch((err) => console.log('Database not connected', err))

/* `app.listen(3333, () => {
  console.log("OrganizeMe Server Started")
})` is starting the Express application and listening for incoming HTTP requests on port 3333. Once
the server is started, it will log the message "OrganizeMe Server Started" to the console. */
app.listen(3333, () => {
  console.log("OrganizeMe Server Started")
})