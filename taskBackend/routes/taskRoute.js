import express from "express";
import { Task } from "../models/todoModel.js";

const router = express.Router();

//Route for adding new task using post to create
router.post("/", async (req, res) => {
  try {
    if (!req.body.task_title || !req.body.task_description) {
      return res.status(400).send({
        message: "Send all required fields: Task title, Task Description",
      });
    }
    const newTask = {
      task_title: req.body.task_title,
      task_description: req.body.task_description,
    };

    const task = await Task.create(newTask);

    return res.status(201).send(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// route for getting all the tasklist from the database using get to fetch all the data
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});

    return res.status(200).json({
      tasks: tasks.length,
      task_list: tasks,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// route for getting a  tasklist from the database using get to fetch a data by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Task.findById(id);

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route for updating or editing a tasklist by using the data id
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.task_title || !req.body.task_description) {
      return res.status(400).send({
        message: "Edit all required fields: Task Title, Task Description",
      });
    }

    const { id } = req.params;

    const result = await Task.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Task is not found" });
    }

    return res.status(200).send({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route for deleting a tasklist by using the data id to locate it
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Task.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Task is not found" });
    }
    return res.status(200).send({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
