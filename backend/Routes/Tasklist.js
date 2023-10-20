const express = require('express')
const TaskModel = require('../Models/Tasklist')
const UserModel = require('../Models/Users')
const TasklistModel = require('../Models/Tasklist')

const router = express.Router()

// ROUTER FOR CREATING/ADDING TASK
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

// ROUTER FOR GETTING THE SPECIFIC TASKLIST OF THE LOGGED IN USER
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

//ROUTER FOR DELETING A TASK OF THE LOGGED IN USER
router.delete('/delete/:id', (req, res) => {
  const {id} = req.params
  TaskModel.findByIdAndDelete({_id: id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})





module.exports = router