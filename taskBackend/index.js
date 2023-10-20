import express from "express";
import { PORT, MONGO_URL } from "./config.js";
import mongoose from "mongoose";
import { Task } from "./models/todoModel.js";
import taskRoute from "./routes/taskRoute.js";
import cors from "cors";

const app = express();

//this will serve as the middleware for parsing the request body of the data
app.use(express.json());

//this will serve as the middleware for handling the Cors policy
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to OrganizeMe");
});

//the middleware
app.use("/tasklist", taskRoute);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Application is connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
