import { useState } from "react";
import './TodoList.css';

export default function Todolist() { 
    let [todos, setTodos]=useState([]);
    let [newTodo, setNewTodo]=useState("");

    let addNewTask=()=>{
        setTodos([...todos , newTodo])
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value)
    }
    return (
        <div id="todo">
            <h1 id="heading">Todo List</h1> 
            <input id="input" type="text" placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}/>
            <button id="btn" onClick={addNewTask}>Add</button>
            <div id="listBox">
            <ul id="list">
                {todos.map((todo)=>(
                    <li>{todo}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}