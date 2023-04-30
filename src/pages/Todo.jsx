import { useState } from "react";

import { toggleTodo, updateTodo } from "../redux/action";
import { deleteTodo } from "../redux/action";
import "./home.css"
import Moment from 'react-moment';

import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
    console.log(todo);

    const [editing, setEditing] = useState(false);
    const [data, setText] = useState(todo?.data);
    const [dates, setdate] = useState(todo?.dates);


    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, data,todo.dates))
    }

    return (
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
            data-testid="todo-test"
        >    
        <div className="spaninput"><span style={{ display: editing ? 'none' : '' }}>{<Moment>{todo?.dates}</Moment>}</span>
            <span style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>
            </div> 
           

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={data}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
              
               
            </form>

            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash" />
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fas fa-pen" />
            </span>
        </li>
    )
}

export default Todo;
