import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Apply for jobs" },
    { text: "Build fun apps" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
