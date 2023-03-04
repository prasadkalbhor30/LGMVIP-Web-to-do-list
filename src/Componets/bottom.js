import React, { useState } from 'react';
import './bottom.css'

import Taskitem from './taskItem'
const Bottom = (props) => {

    // // function to delete to do list task 
    const deletetask = (id) => {
        const newData=props.Task.filter(element=> (element.id!=id));
        props.changeState(newData);
    }

    return (
        <div className="bottom">
            <h3>Task To Do</h3>
            <ul id="taskList" className="noTask">
                {
                    props.Task.map(Element => (
                        <Taskitem key={Element.id} elm={Element} delete={deletetask}/>
                    )
                    )
                }
                

            </ul>
            
        </div>
    );
}

export default Bottom; 