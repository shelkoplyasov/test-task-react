import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoNavigation from './TodoNavigation';
import uuidv4 from '../helpers/uuidv4';
import './Todo.css';

function Todo() {
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('All');
  const changeFilter = (filterValue) => setFilter(filterValue);
  const [todoList, setTodoList] = useState([]);
  const changeValue = (event) => setValue(event.target.value);
  const changeTodo = (changedTodo) => setTodoList([...todoList.map((todo) => {
    if (changedTodo.id === todo.id) return changedTodo;
    return todo;
  })]);
  const completeAll = () => setTodoList([...todoList.map((todo) => ({ ...todo, status: 'completed' }))]);
  const removeCompleted = () => setTodoList([...todoList.filter((todo) => todo.status !== 'completed')]);
  const createTodo = () => {
    if (value.length === 0) return;
    setTodoList([...todoList, {
      id: uuidv4(),
      status: 'active',
      text: value,
    }]);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      createTodo();
      setValue('');
    }
  };
  const changeStatus = (id) => setTodoList([...todoList.map((todo) => {
    if (id === todo.id) {
      return ({
        ...todo,
        status: todo.status === 'active' ? 'completed' : 'active',
      });
    }
    return todo;
  })]);
  const removeTodo = (id) => setTodoList([...todoList.filter((todo) => id !== todo.id)]);

  return (
    <div className="todo-component">
      <div className="todo-input">
        <button onClick={completeAll} type="button">complete all</button>
        <input className="todo-input_targer" value={value} onKeyPress={handleKeyPress} onChange={changeValue} placeholder="What needs to be done?" />
      </div>
      <div className="todos">
        {todoList.map((todo) => {
          if (filter === 'All' || todo.status === filter.toLowerCase()) {
            return (
              <TodoItem
                key={todo.id}
                changeTodo={changeTodo}
                changeStatus={changeStatus}
                removeTodo={removeTodo}
                todo={todo}
              />
            );
          }
          return null;
        })}
      </div>
      <TodoNavigation filter={filter} activeCount={todoList.filter((todo) => todo.status === 'active').length} count={todoList.length} removeCompleted={removeCompleted} changeFilter={changeFilter} />
    </div>
  );
}

export default Todo;
