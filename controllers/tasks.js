import { Task } from "../models/tasks.model.js";

// Get All the tasks from the DB
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ data: { success: true, tasks, length: tasks.length } });
    } catch (error) {
        res.status(504).send({ success: false, msg: error });
    }
};

// Create a task in the DB
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json({ data: { success: true, task, msg: 'Task has been created' } });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
};
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete({ _id: req.params.id });
        if (!task) {
            return res
                .status(404)
                .json({ msg: `No task Found With id: ${req.params.id}` });
        }
        res.status(200).json({ success: true, msg: 'Task has been delted' });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
};

// edit a task
const editTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return res
                .status(404)
                .json({ msg: `No task Found With id: ${req.params.id}` });
        }
        res.status(200).json({ data: { success: true, task, msg: 'Task has been Updated' } });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
};

// get one task with id
const getOneTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });
        if (!task) {
            return res
                .status(404)
                .json({ msg: `No task Found With id: ${req.params.id}` });
        }
        res.status(200).json({ data: { success: true, task } });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
};

export { getAllTasks, deleteTask, editTask, createTask, getOneTask };
