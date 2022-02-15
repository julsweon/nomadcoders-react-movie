import { useState, useEffect } from "react";
import styles from "./App.module.css";

//toDoList
function App3 () {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (event) => {
        setTodo(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return; //kill the function
        }
        //why we don't use 'toDo =""' or 'toDos.push()' => we don't directly modify state. use modifier fx instead
        setTodos((currentArray) => [toDo, ...currentArray]); //(sending a function) receive current array and make new array with entered value of toDo 
        setTodo(""); //(sending a value) empty the input
    };  
    const resetTodo = () => {
        setTodos((currenArray) => []);
    }
    //map() - runs for every element in the array
    console.log(toDos);

    return (
        <div>
            <h1 className={styles.title}>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to-do..."/>
                <button>Add to-do</button>
                <button onClick = {resetTodo}>RESET</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => <li key={index}>{item}</li>)} 
            </ul>
        </div>
    );
}

export default App3;