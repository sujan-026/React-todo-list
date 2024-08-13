/* eslint-disable react/prop-types */
import ToDoCard from "./ToDoCard";

function ToDoList({ todos, handleDeleteTodo }) {
    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <ToDoCard
                        handleDeleteTodo={handleDeleteTodo}
                        index={todoIndex}
                        key={todoIndex}>
                        <p>{todo}</p>
                    </ToDoCard>
                )
            })}
        </ul>
    )
}

export default ToDoList