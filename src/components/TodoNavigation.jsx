/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './TodoNavigation.css';

function TodoNavigation({
  filter, changeFilter, count, removeCompleted, activeCount,
}) {
  const filterValues = ['All', 'Active', 'Completed'];
  return (
    <nav className="todos_navigation navigation">
      <div className="navigation_todo-counter">
        {activeCount}
        {' '}
        items left
      </div>
      <div className="navigation_filter filter">
        {filterValues.map((value) => (
          // eslint-disable-next-line react/no-array-index-key
          <button onClick={() => changeFilter(value)} key={value} type="button" className={`filter_item${(filter === value && ' filter_item--active') || ''}`}>
            {value}
          </button>
        ))}
      </div>
      <button type="button" onClick={removeCompleted} className={`navigation_filter${(!(count - activeCount) && ' navigation_filter--hidden') || ''}`}>Clear completed</button>
    </nav>
  );
}

export default TodoNavigation;
