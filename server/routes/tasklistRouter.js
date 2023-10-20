const express = require('express');
const router = express.Router();
const cors = require('cors');
const {addTask, showTasks} = require('../controllers/tasklistController');


router.post('/addTask', addTask)
router.get('/showTasks', showTasks)







module.exports = router