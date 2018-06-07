import React, { Component } from 'react';
//import logo from './logo.svg';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import Task from './Task';
import './App.css';

class App extends Component {
  
  constructor() {    
    this.tasks = JSON.parse(localStorage.getItem('TASKS'));
    if(!this.tasks) {
      this.tasks = [
        {task: 'Go to Dentist', isComplete: false},
        {task: 'Do Gardening', isComplete: true},
        {task: 'Renew Library Account', isComplete: false},
      ];
    }  
    this.loadTasks();  
    this.addEventListeners();
}
  
  toggleTaskStatus(index) {
      //this.tasks[index].isComplete = !this.tasks[index].isComplete;
      //this.loadTasks();
      console.log("toggleTaskStatus");
      console.log(index);
  }
  deleteTask(event, taskIndex) {
    //event.preventDefault();
    //this.tasks.splice(taskIndex, 1);
    //this.loadTasks();
    console.log("deleteTask");
    console.log(event, taskIndex);
  }
  addTaskClick() {
    //let target = document.getElementById('addTask');
    //this.addTask(target.value);
    //target.value = "";
    console.log("addTaskClick");
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
