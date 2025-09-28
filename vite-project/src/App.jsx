import React from "react";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh",
        backgroundColor: "#1e1e1e"
      }}
    >
      <div 
        style={{ 
          maxWidth: "400px", 
          width: "100%", 
          padding: "2rem", 
          borderRadius: "12px", 
          backgroundColor: "#2a2a2a", 
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          color: "#f1f1f1"
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>To-Do List</h1>
        <TodoList />
      </div>
    </div>
  );
}
