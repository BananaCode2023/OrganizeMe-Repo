const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  task_title: {
    type: String,
    required: true
  },
  task_description: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  today: {
    type: String
  },
  priority: {
    type: String
  },
  category: {
    type: String
  }
})

const TasklistModel = mongoose.model("tasklists", TaskSchema)

module.exports = TasklistModel