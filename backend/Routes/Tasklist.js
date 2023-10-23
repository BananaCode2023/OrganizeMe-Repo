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
    priority: req.body.priority,
    category: req.body.category
  })
  .then(result => {
    return res.json(result)
  })
  .catch(err => console.log(err))
})

//ROUTER FOR EDITING THE TASKLIST
router.put('/edit-task/:id', async(req,res) => {
  try{
    if(
      !req.body.task_title
      ){
        return res.status(404).send({
          message: 'Please input task Title'
        })
      }
      const {id} = req.params
//to find the id of the task chosen and update it in the database
      const result = await TaskModel.findByIdAndUpdate(id, req.body);
      if(!result){
        return res.status(404).json({message: 'Task not found'})
      }
      return res.status(200).send({message: 'Task Edited successfully'})
  }
  catch (error){
    console.log(error.message)
    res.status(500).send({message: error.message})
  }
})

//ROUTER FOR GETTING THE TASK THAT WILL BE EDITED
router.get('/:id', async (req,res) => {
  try {
    const {id} = req.params
    const task = await TaskModel.findById(id)
    return res.status(200).json(task)
  }
  catch(error){
    console.log(error.message)
    res.status(500).send({message: error.message})
  }
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

//ROUTER FOR GETTING A TASK VALUE
router.get('/get-task/:id', async (req,res) => {
  const id = req.params.id
  try{
    const tasks = await TasklistModel.find({_id: id})
    res.status(200).json(tasks)
  }
  catch(err){
    res.status(404).json(err)
  }
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


//ROUTER FOR GETTING THE PERSONAL CARE CATEGORY OF THE LOGGED IN USER
router.get('/category/personal/:id', async(req,res) => {
  const id = req.params.id
  try{
    const personal = await TasklistModel.find({
      category: "🧘🏻‍♀ Personal Care",
      userId: id
    })
    res.status(200).json(personal)
  }
  catch(err){
    res.status(404).json(err)
  }
})
//ROUTER FOR GETTING THE HEALTH CATEGORY OF THE LOGGED IN USER
router.get('/category/health/:id', async(req,res) => {
  const id = req.params.id
  try{
    const health = await TasklistModel.find({
      category: "⚕️ Health",
      userId: id
    })
    res.status(200).json(health)
  }
  catch(err){
    res.status(404).json(err)
  }
})

//ROUTER FOR GETTING THE RELATIONSHIP CATEGORY OF THE LOGGED IN USER
router.get('/category/relationship/:id', async(req,res) => {
  const id = req.params.id
  try{
    const realtionship = await TasklistModel.find({
      category: "👫🏼 Relationship",
      userId: id
    })
    res.status(200).json(realtionship)
  }
  catch(err){
    res.status(404).json(err)
  }
})

//ROUTER FOR GETTING THE FAMILY CATEGORY OF THE LOGGED IN USER
router.get('/category/family/:id', async(req,res) => {
  const id = req.params.id
  try{
    const family = await TasklistModel.find({
      category: "👨🏻‍👩🏻‍👧🏻 Family",
      userId: id
    })
    res.status(200).json(family)
  }
  catch(err){
    res.status(404).json(err)
  }
})

//ROUTER FOR GETTING THE EDUCATION CATEGORY OF THE LOGGED IN USER
router.get('/category/education/:id', async(req,res) => {
  const id = req.params.id
  try{
    const education = await TasklistModel.find({
      category: "🎓 Education",
      userId: id
    })
    res.status(200).json(education)
  }
  catch(err){
    res.status(404).json(err)
  }
})

//ROUTER FOR GETTING THE FITNESS CATEGORY OF THE LOGGED IN USER
router.get('/category/fitness/:id', async(req,res) => {
  const id = req.params.id
  try{
    const fitness = await TasklistModel.find({
      category: "🏋🏻‍♂️ Fitness",
      userId: id
    })
    res.status(200).json(fitness)
  }
  catch(err){
    res.status(404).json(err)
  }
})

//ROUTER FOR GETTING THE WORK CATEGORY OF THE LOGGED IN USER
router.get('/category/work/:id', async(req,res) => {
  const id = req.params.id
  try{
    const work = await TasklistModel.find({
      category: "💼 Work",
      userId: id
    })
    res.status(200).json(work)
  }
  catch(err){
    res.status(404).json(err)
  }
})

//ROUTER FOR GETTING OTHERS CATEGORY OF THE LOGGED IN USER
router.get('/category/others/:id', async(req,res) => {
  const id = req.params.id
  try{
    const others = await TasklistModel.find({
      category: "🤔 Others",
      userId: id
    })
    res.status(200).json(others)
  }
  catch(err){
    res.status(404).json(err)
  }
})


module.exports = router