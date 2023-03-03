import React, { useState } from 'react';
import './bottom.css'
import Task from './tasks'

import Taskitem from './taskItem'
const Bottom = () => {
    const [tasklist, settaskState] = useState(Task);
    const [oldData, setoldData] = useState(Task);

    // function to delete to do list task 
    const deletetask = (id) => {
        const newData=oldData.filter(element=> (element.id!=id));
        setoldData(newData);
        settaskState(newData);
    }

    return (
        <div className="bottom">
            <h3>Task To Do</h3>
            <ul id="taskList" className="noTask">
                {
                    tasklist.map(Element => (
                        <Taskitem key={Element.id} elm={Element} delete={deletetask}/>
                    )
                    )
                }
                

            </ul>
            
        </div>
    );

}

export default Bottom; 