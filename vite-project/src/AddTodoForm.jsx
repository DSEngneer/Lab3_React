import React, { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a task..." 
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button type="submit" style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
        Add
      </button>
    </form>
  );
}
