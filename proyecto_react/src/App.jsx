import { useState, useEffect, useRef } from 'react';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
      inputRef.current.focus();
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Nueva tarea"
        ref={inputRef}
      />
      <button onClick={handleAddTask}>Agregar</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{' '}
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;