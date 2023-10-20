const Tasklist = require('../models/tasklistModel')

//controller for adding task in the database 
const addTask = async (req,res) => {
  const {task_title,task_description,user_id} = req.body;

  try {
    if (!task_title) {
      return res.status(400).send({
        message: "Please input a task title",
      });
    }
    const newTask = {
      task_title: task_title,
      task_description: task_description,
      user_id: user_id
    };

    const task = await Tasklist.create(newTask);

    return res.status(201).send(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

//controller for showing all the task listed in the database
const showTasks = async (req,res) => {
  try {
    const tasks = await Tasklist.find({});

    return res.status(200).json({
      tasks: tasks.length,
      task_list: tasks,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}



module.exports = {
  addTask,
  showTasks
}




















