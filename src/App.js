import React from 'react';
import './App.css';
import TaskApp from './components/TaskApp';
import data from './data/tasks.json';
function App() {
  return (
    <div className="container">
      <TaskApp task={data}/>
    </div>
  );
}

export default App;
