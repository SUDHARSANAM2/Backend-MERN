const express = require ("express");
const {createTask,getTask,getSingleTask,updateData,DeleteTask} = require ("../Controllers/taskController.js")


const router = express.Router();


router.post("/",createTask);
router.get('/',getTask);
router.get('/:id',getSingleTask);
router.patch('/:id',updateData);
router.delete('/:id',DeleteTask);

module.exports = router;

