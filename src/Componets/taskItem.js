import './taskitem.css'
import React from 'react';
function Taskitem(props) {


    return (
        <>
            <li id={props.elm.taskStatus}>
                <span>
                    <i onClick={() => props.doneTask(props.elm.id)} className="icon fa fa-check-circle-o check " aria-hidden="true">
                    </i>
                </span> {props.elm.task}
                <span className="btnSpan">
                    <button className="delete-button" onClick={() => props.delete(props.elm.id)} >Delete</button>
                </span>
            </li>
        </>
    );
}

export default Taskitem;