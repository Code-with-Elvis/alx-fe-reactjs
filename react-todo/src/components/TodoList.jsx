import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  // Initialize state with demo todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Practice JavaScript", completed: true },
    { id: 4, text: "Study Tailwind CSS", completed: false },
  ]);

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(), // Simple ID generation
        text: text.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Todo List
      </h1>

      <AddTodoForm onAddTodo={addTodo} />

      <div className="mt-6">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 py-4">
            No todos yet. Add one above!
          </p>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-600 text-center">
        {todos.filter((todo) => !todo.completed).length} of {todos.length} tasks
        remaining
      </div>
    </div>
  );
};

export default TodoList;
