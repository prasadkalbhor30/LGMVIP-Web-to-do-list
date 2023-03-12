
import './bottom.css'

import Taskitem from './taskItem'
const Bottom = (props) => {

    // // function to delete to do list task 
    const deletetask = (id) => {
        const newData = props.Task.filter(element => (element.id !== id));
        props.changeState(newData);
    }
    const doneTask = (id) => {
        const newData = props.Task.filter(element => (element.id !== id));
        const element = props.Task.filter(element => (element.id === id));
        if (element[0]['taskStatus']==='done')
        {
            console.log("im on")
            element[0]['taskStatus'] = 'undone';
            props.changeState(element.concat(newData));

        }
        else{
            element[0]['taskStatus'] = 'done';
            props.changeState(newData.concat(element));

        }
        
        
    }

    return (
        <div className="bottom">
            <h3>Task To Do</h3>
            <ul id="taskList" className="noTask">
                
                {
                props.Task[0]===undefined ?  <h4>No Tasks Added</h4> :
                    
                    props.Task.map(Element => (
                        
                        <Taskitem key={Element.id} elm={Element} delete={deletetask} doneTask={doneTask} />
                    ))
                }

            </ul>
        </div>
    );
}

export default Bottom; 