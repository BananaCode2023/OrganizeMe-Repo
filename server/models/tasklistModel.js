const mongoose = require('mongoose')
const {Schema} = mongoose

const tasklistSchema = new Schema({
  task_title: {
    type: String,
    required: true
  },
  task_description: String,
  user_id: String
})

const TasklistModel = mongoose.model('Tasklist', tasklistSchema)

module.exports = TasklistModel;
