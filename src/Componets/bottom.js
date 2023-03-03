import React, { useState } from 'react';
import './bottom.css'
import Task from './tasks'
const Bottom = () => {


    const [taskList, setTasksValue] = useState('noTask');
 
                    Task.forEach(element => {
    return (
        <div className="bottom">
            <h3>Task To Do</h3>
            <ul id="taskList" className="noTask">
                {/* <h2 className="headline {taskList}">No tasks</h2> */}
                {
                       
                }
            </ul>
            <h3>Completed Task</h3>
            <ul id="completedTaskList">
                <h2 className="headline {completedTask}">No tasks</h2>


            </ul>
        </div>
    ); console.log("i am this " +element.task);
                        <h2 className="headline {taskList}">No tasks</h2>

                    });
}

export default Bottom; 