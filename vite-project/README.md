App.jsx
│
└── TodoList.jsx   (state: [todos])
      │
      ├── AddTodoForm.jsx
      │     ↑ onAddTodo(newTask)   (child → parent)
      │
      └── TodoItem.jsx   (state: isCompleted)
            props: task, onDelete
            │
            ├── [Checkbox] → updates local state (isCompleted)
            └── [Delete Button] ↑ onDelete(id)  (child → parent)