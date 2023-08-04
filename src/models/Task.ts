import { MODELS_NAMES } from "@/constants";
import { Schema, model, models } from "mongoose";

interface Task {
  title: string;
  description: string;
}

const taskSchema = new Schema<Task>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  }
},{
  timestamps: true
})

export default models[MODELS_NAMES.Task] || model<Task>(MODELS_NAMES.Task, taskSchema)