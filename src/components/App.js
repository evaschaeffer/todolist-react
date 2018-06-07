import React, { Component } from 'react';
//import logo from './logo.svg';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    let tasks = JSON.parse(localStorage.getItem('TASKS'));
    if(!tasks) {
      tasks = [
        {task: 'Go to Dentist', isComplete: false},
        {task: 'Do Gardening', isComplete: true},
        {task: 'Renew Library Account', isComplete: false},
      ];
    }  
    this.state = { 
      tasks: tasks
    }
    //this.addEventListeners = this.addEventListeners.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
}
  
  toggleTaskStatus(taskIndex) {
    console.log("toggleTaskStatus");
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));   
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
    this.setState({
      tasks: tasks
    });
  }
    deleteTask(taskIndex) {
      console.log("deleteTask");
      let tasks = JSON.parse(JSON.stringify(this.state.tasks));
      tasks.splice(taskIndex, 1);
      this.setState({
        tasks: tasks
      });
    }
    addTask(task) {
      console.log("addTask");
      let tasks = JSON.parse(JSON.stringify(this.state.tasks));
      let newTask = {
        task,
        isComplete: false,
      }; 
      tasks.push(newTask);
      this.setState({
        tasks: tasks
      });
    }

  render() {
    localStorage.setItem('TASKS', JSON.stringify(this.state.tasks));
    return (
      <div className="container">
        <h1>To Do List</h1>
          <TaskForm addTask={this.addTask}/>
          <TaskList tasks={this.state.tasks} 
            toggleTaskStatus={this.toggleTaskStatus} 
            deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
