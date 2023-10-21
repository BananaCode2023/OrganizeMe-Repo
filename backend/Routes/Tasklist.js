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
    userId: req.body.userId,
    today: req.body.today,
    priority: req.body.priority
  })
  .then(result => {
    return res.json(result)
  })
  .catch(err => console.log(err))
})

// ROUTER FOR GETTING THE TASKLIST OF THE LOGGED IN USER
router.get('/user-tasks/:id', async (req,res) => {
  const id = req.params.id
  try{
    const tasks = await TasklistModel.find({userId: id})
    res.status(200).json(tasks)
  }
  catch(err){
    res.status(404).json(err)
  }
})

//ROUTER FOR DELETING A TASK OF THE LOGGED IN USER
router.delete('/delete/:id', (req, res) => {
  const {id} = req.params
  TaskModel.findByIdAndDelete({_id: id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

//ROUTER FOR GETTING THE PRIORITIZED TASKLIST OF THE LOGGED IN USER
router.get('/priorities/:id', async(req,res) => {
  const id = req.params.id
  try{
    const priorities = await TasklistModel.find({
      priority: "⭐priority",
      userId: id
    })
    res.status(200).json(priorities)
  }
  catch(err){
    res.status(404).json(err)
  }
})

//ROUTER FOR GETTING THE TODAY TASKLIST OF THE LOGGED IN USER
router.get('/today/:id', async(req,res) => {
  const id = req.params.id
  try{
    const priorities = await TasklistModel.find({
      today: "📆today",
      userId: id
    })
    res.status(200).json(priorities)
  }
  catch(err){
    res.status(404).json(err)
  }
})




module.exports = router

//ROUTER FOR GETTING THE PRIORITIZED TASKLIST OF THE LOGGED IN USER
// router.get('/priorities', async(req,res) => {
//   try{
//     const priorities = await TasklistModel.exists({priority: "⭐priority"})
//     res.status(200).json(priorities)
//   }
//   catch(err){
//     res.status(404).json(err)
//   }
// })