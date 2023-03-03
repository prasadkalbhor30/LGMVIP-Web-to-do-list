
import './top.css';

function top() {
    return (
            <div className="top">
                <h1>My To Do List</h1>
                <div className="inp">

                    <input id="Myinput" type="text" placeholder="Title..." />
                    <button className="Add">Add</button>
                </div>
            </div>
    );
}

export default top;
