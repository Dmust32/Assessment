import React, { Component } from 'react';
import axios from 'axios';


class AddButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            task:{
                text: ''
            },
            taskList: [],
        }

    }
    componentDidMount = () => {
        axios({
            method: 'GET',
            url:'http://localhost:5050/api/taskList'
        }).then(response => {
            this.setState({taskList: response.data})

        })
    }

    addTask = () => {
        axios({
            method: 'POST',
            url:'http://localhost:5050/api/taskList',
            data: {
                task: this.state.task
            }
            
        }).then(response => {
            this.setState({taskList: response.data});
            console.log('3333',this.state.taskList)
            
        })
    }

    doneTask = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:5050/api/taskList/${id}`
        }).then(response =>{
            this.setState({taskList: response.data})
        })
           
    }

    handleTaskChange = (event) => {
        this.setState({task: {text: event.target.value}})
        console.log(this.state.task)
    }

    render(){
        return(
            
            <div>
                <input type="text" placeholder="Task"  onChange={this.handleTaskChange} />
                <button onClick={()=>{this.addTask()}} >Add Task</button>
                
                <div className="TaskContainer">

                    
                    {this.state.taskList.map(task => {
                        console.log(task.id)
                        return (
                            <div className= "task">
                            <p>{task.text}</p>
                            <button onClick={()=> {this.doneTask(task.id)}}>DONE!</button>
                            </div>
                    )
                    })}
                </div>

                






            </div>
        )
    }
}

export default AddButton
