import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            task={todo.task} 
            onDelete={() => handleDeleteTodo(todo.id)} 
          />
        ))}
      </ul>
    </div>
  );
}
