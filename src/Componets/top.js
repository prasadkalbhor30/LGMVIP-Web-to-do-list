import React, { useState } from 'react';
import './top.css';

function Top(props) {

    const [input, setinput] = useState('');
    const addTask = () => {
        const newobj = {
            'id': new Date().getTime().toString(),
            task: input
        }
        setinput('');

        const newdata = [...props.Task, newobj];
        props.changeState(newdata);
    }
    const inputChange = (event) => {
        setinput(event.target.value);
    }

    return (
        <div className="top">
            <h1>My To Do List</h1>
            <div className="inp">

                <input id="Myinput" type="text" onChange={inputChange} value={input} placeholder="Title..." />
                <button onClick={addTask} className="Add">Add</button>
            </div>
        </div>
    );
}

export default Top;
