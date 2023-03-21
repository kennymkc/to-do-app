import { useState } from 'react';
import Todo from './components/Todo';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Apply for jobs" },
    { text: "Build fun apps" }
  ]);

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
      </div>
    </div>
  );
}

export default App;
