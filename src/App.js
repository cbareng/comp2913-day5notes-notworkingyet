import { useState } from "react";
import "./styles.css";
import data from "./data.json";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
  const [todoList, setToDoList] = useState(data);
  const [filter, setFilter] = useState("All");

  const handleToggle = (id) => {
    let mapped = todoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const addTask = (userInput) => {
    setToDoList([
      ...todoList,
      { id: todoList.length + 1, task: userInput, complete: false }
    ]);
  };
  return (
    <div className="App">
      <TodoForm addTask={addTask} />
      <TodoList
        toDoList={todoList}
        filter={filter}
        setFilter={setFilter}
        handleToggle={handleToggle}
      />
    </div>
  );
}
