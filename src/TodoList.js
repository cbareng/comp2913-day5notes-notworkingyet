import Todo from "./App";

const getFilteredTodoList = (todos, filter) => {
  return todos.filter((todo, filter) => {
    if (filter === "Coopleted") {
      return todo.complete;
    } else if (filter === "Active") {
      return !todo.complete;
    } else {
      return todo;
    }
  });
};

const TodoList = ({ todoList, filter, setFilter, handleToggle }) => {
  return (
    <ul>
      {getFilteredTodoList(todoList, filter).map((todo) => {
        return (
          <Todo todo={todo} setFilter={setFilter} handleToggle={handleToggle} />
        );
      })}
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={() => setFilter("Active")}>Completed</button>
      <button onClick={() => setFilter("All")}>Completed</button>
    </ul>
  );
};
