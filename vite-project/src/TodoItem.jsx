import React, { useState } from "react";

export default function TodoItem({ task, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li 
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "0.5rem"
      }}
    >
      <input 
        type="checkbox" 
        checked={isCompleted} 
        onChange={() => setIsCompleted(!isCompleted)} 
        style={{ marginRight: "0.5rem" }}
      />
      <span 
  style={{ 
    textDecoration: isCompleted ? "line-through" : "none",
    color: isCompleted ? "#888" : "#f1f1f1", // завжди світлий текст
    flexGrow: 1
  }}
>
  {task}
</span>
      <button 
  onClick={onDelete} 
  style={{ 
    marginLeft: "0.5rem",
    padding: "0.4rem 0.8rem",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#e74c3c", 
    color: "#fff",
    cursor: "pointer"
  }}
>
  Delete
</button>
    </li>
  );
}
