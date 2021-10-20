/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>todos</h1>
      </header>
      <Todo />
    </div>
  );
}

export default App;
