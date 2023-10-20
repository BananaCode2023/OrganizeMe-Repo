//For login & signup process
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express();
//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not connected', err))

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

//route for login-signup
app.use('/', require('./routes/authRoutes'))

//route for tasklist
app.use('/tasklist', require('./routes/tasklistRouter'))














const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))
