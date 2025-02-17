const { default: mongoose } = require('mongoose');
const taskmodel = require('../Models/TaskModel.js');

//  To create a DB Settings
 
const createTask = async(req,res)=>{
    const {title,description}=req.body;

    try{
        const task = await taskmodel.create({title,description});
        res.status(200).json(task);
    }
    catch(e){
        res.status(400).json({error:e.message});

    }
};


// Getting all datas from the DB

const getTask = async(req,res)=>{

    try{
        const task = await taskmodel.find({});
        res.status(200).json(task);
    }
    catch(e){
        res.status(400).json({error:e.message});

    }
};


// Getting a single data from the DB

const getSingleTask = async(req,res)=>{
    const {id}=req.params ;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "Task not Found"});
    } 
    try{
        const task = await taskmodel.findById(id);
        res.status(200).json(task);
    }
    catch(e){
        res.status(400).json({error:e.message});

    }
};

// Update the data in the DB

const updateData = async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"Task is Found"})
    }
    try{
        const task = await taskmodel.findByIdAndUpdate({
            _id:id,
        },
        {
            ...req.body,
        },
       
    );
    res.status(200).json(task)
      
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
};

const DeleteTask =async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"Task is Found"})
    }
    try{
        const task = await taskmodel.findByIdAndDelete(id);
        res.status(200).json(task);
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}
 

module.exports = {createTask,getTask,getSingleTask,updateData,DeleteTask}