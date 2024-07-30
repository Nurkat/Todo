import './App.css';
import TodoList from './components/Todolist';  
import TodoForm from './components/Todoform';
import { useState } from 'react';



function App() {

  return (
    <>
      <TodoForm/>
      <TodoList/>
    </>
  );
}

export default App;
