import mongoose from "mongoose";

const tasklistSchema = mongoose.Schema(
  {
    task_title: {
      type: String,
      required: true,
    },
    task_description: {
      type: String,
      required: true,
    },
    // organize_when: {
    //   type: Date,
    //   required: false,
    // }
  },
  {
    timestamps: true,
  }
);


export const Task = mongoose.model("tasklist", tasklistSchema);
