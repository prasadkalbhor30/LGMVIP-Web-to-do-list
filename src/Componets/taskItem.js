import './taskitem.css'
import React from 'react';
function Taskitem(props) {

    return (
        <>
            <li id="taskNo">
                <span>
                    <i  className="icon fa fa-check-circle-o check" aria-hidden="true">
                    </i>
                </span> {props.elm.task}
                <span className="btnSpan">
                    <button className='edit'>Edit</button>
                    <button className="delete-button" onClick={() => props.delete(props.elm.id)} >Delete</button>
                </span>
            </li>
        </>
    );
}

export default Taskitem;