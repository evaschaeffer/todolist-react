import React from 'react';
import Task from './Task'

class TaskList extends React.Component {
    render() {
        const { tasks } = this.props;
        return(
            <div>
            { tasks.map((task, index) =>
                <Task 
                    task={task}
                    index={index} 
                    toggleTaskStatus={this.props.toggleTaskStatus} 
                    deleteTask={this.props.deleteTask}
                />
            )}
            </div>
        );
    }
}
export default TaskList;