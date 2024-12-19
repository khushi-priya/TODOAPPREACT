

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (!newTodo.trim()) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo.trim(), id: uuidv4(), isDone: false },
    ]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isDone: true,
      }))
    );
  };

  const markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  return (
    <div
      className="container mt-5 p-4"
      style={{
        maxWidth: "500px",
        backgroundColor: "pink",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(237, 86, 5, 0.2)",
      }}
    >
      <h3 className="text-center mb-4" style={{ color: "#343a40" }}>
        <i className="bi bi-list-check"></i> Todo List
      </h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a task..."
          value={newTodo}
          onChange={updateTodoValue}
          style={{
            borderRadius: "8px",
            borderColor: "black",
          }}
        />
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={addNewTask}
          style={{ borderRadius: "8px" }}
        >
          Add Task
        </button>
      </div>
      <ul className="list-group mb-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: todo.isDone ? "aqua" : "#ffffff",
              border: "1px solid black",
              borderRadius: "8px",
              marginBottom: "8px",
              padding: "10px 15px",
            }}
          >
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
                color: todo.isDone ? "#6c757d" : "#343a40",
                flexGrow: 1,
              }}
            >
              {todo.task}
            </span>
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-outline-success btn-sm"
                onClick={() => markAsDone(todo.id)}
                style={{
                  borderRadius: "6px",
                  transition: "0.3s",
                }}
              >
                <i className="bi bi-check2"></i> Done
              </button>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => deleteTodo(todo.id)}
                style={{
                  borderRadius: "6px",
                  transition: "0.3s",
                }}
              >
                <i className="bi bi-trash"></i> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-outline-success w-100"
        onClick={markAllDone}
        style={{
          borderRadius: "8px",
          transition: "0.3s",
        }}
      >
        Mark All Done
      </button>
    </div>
  );
}


