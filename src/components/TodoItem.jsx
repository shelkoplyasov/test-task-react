/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './TodoItem.css';

function TodoItem({
  todo, changeStatus, removeTodo, changeTodo,
}) {
  const statusHandler = () => changeStatus(todo.id);
  const removeHandler = () => removeTodo(todo.id);
  const [readOnly, setReadOnly] = useState(true);
  const [text, setText] = useState(todo.text);
  const changeText = (event) => setText(event.target.value);
  useEffect(() => {
    if (readOnly && todo.text !== text) {
      changeTodo({ ...todo, text });
    }
  }, [readOnly]);
  return (
    <div className="todos_item todo">
      <div className="todo_info">
        <div className="todo_checkbox">
          <label htmlFor={todo.id} className={`todo_checkbox-label${(todo.status === 'completed' && ' todo_checkbox-label--active') || ''}`} />
          <input id={todo.id} onChange={statusHandler} type="checkbox" className="todo_checkbox-state" checked={todo.status === 'completed'} />
        </div>
        <input onChange={changeText} readOnly={readOnly} value={text} onBlur={() => setReadOnly(true)} onDoubleClick={() => setReadOnly(false)} className={`todo_text ${`todo_text--${todo.status}`}`} />
      </div>
      <button onClick={removeHandler} type="button" className="todo_complete-button">x</button>
    </div>
  );
}

export default TodoItem;
