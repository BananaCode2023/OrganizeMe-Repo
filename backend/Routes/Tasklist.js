const express = require('express')
const TaskModel = require('../Models/Tasklist')
const UserModel = require('../Models/Users')
const TasklistModel = require('../Models/Tasklist')

const router = express.Router()

router.post('/create-task' , async (req,res) => {
  TaskModel.create({
    task_title: req.body.task_title,
    task_description: req.body.task_description,
    userId: req.body.userId
  })
  .then(result => {
    return res.json(result)
  })
  .catch(err => console.log(err))
})

router.get('/user-tasks/:id', async (req,res) => {
  const id = req.params.id
  try{
    const tasks = await TasklistModel.find({userId: id})
    res.status(201).json(tasks)
  }
  catch(err){
    res.status(500).json(err)
  }
})

module.exports = router