import { useState } from "react";

import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
    const [todos, setTodos] = useState(["Go to gym"]);
    const [todoValue, setTodoValue] = useState("");

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo];
        setTodos(newTodoList);
    }

    function handleDeleteTodo(index) {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex !== index;
        });
        setTodos(newTodoList);
    }

    function handleEditTodo(index) {
        const valueToBeEdited = todos[index];
        setTodoValue(valueToBeEdited);
        handleDeleteTodo(index);
    }

    return (
        <>
            <ToDoInput
                handleAddTodos={handleAddTodos}
                todoValue={todoValue}
                setTodoValue={setTodoValue}
            />
            <ToDoList
                todos={todos}
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
            />
        </>
    )
}

export default App