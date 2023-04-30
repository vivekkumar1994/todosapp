import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/action";


const TodoForm = () => {
    const [data, setText] = useState("");
    const [dates, setdate] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(data,dates));

        setText('');
        setdate('');
       
    }
    const ondateChange = (e) => {
        setdate(e.target.value);
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={data}
            />
            <input type="date" name="bday" onChange={ondateChange}/>
            <button type="submit">submit</button>
        </form>
    )
}

export default TodoForm;