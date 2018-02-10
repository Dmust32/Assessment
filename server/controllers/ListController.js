const axios = require('axios');
let taskList = [];
let id = 0;

module.exports = {
    addTask: (req, res) =>{
        const {task} = req.body;
        task.id = id;
        id ++;
        taskList.push(task);
        console.log(taskList);
        res.send(taskList)


    },

    getList: (req, res) =>{
        res.send(taskList)
    },

    deleteComment: (req, res) =>{
        const deleteId = req.params.id;
        const deleteIndex = taskList.findIndex(task => task.id == deleteId);
        console.log("this is delete Id", deleteId)
        newArr = taskList.filter(task => {
           return task.id !== deleteIndex});
        taskList = newArr;
        console.log("new task list", taskList);
        res.send(taskList)
    }
}
