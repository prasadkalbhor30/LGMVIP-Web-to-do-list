import React, { useState } from 'react';
import './top.css';

function Top(props) {

    const [input, setinput] = useState('');
    const addTask = (event) => {
        event.preventDefault();
        const newobj = {
            'id': new Date().getTime().toString(),
            task: input,
            taskStatus: "notdone"
        }
        setinput('');

        const newdata = [newobj, ...props.Task];
        props.changeState(newdata);
    }
    const inputChange = (event) => {
        setinput(event.target.value);
    }

    return (
        <div className="top">
            <h1>My To Do List</h1>
            <form className="inp" onSubmit={addTask}>
                <input id="Myinput" type="text" onChange={inputChange} value={input} required placeholder="Title..." />
                <button className="Add">Add</button>
            </form>
        </div>
    );
}

export default Top;
