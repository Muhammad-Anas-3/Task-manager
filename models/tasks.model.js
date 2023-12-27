import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        Task: {
            type: String,
            trim: true,
            maxLength: [60, 'Max Length upto 20 Characters'],
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        },
    },
    { timestamps: true }
);

export const Task = mongoose.model("Task", TaskSchema);
