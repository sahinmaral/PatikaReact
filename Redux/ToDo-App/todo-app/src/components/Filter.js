import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {editActiveFilter,clearCompleted, selectTasks, selectActiveFilter} from '../redux/todos/todosSlice'

function Filter() {
  const items = useSelector(selectTasks);
  const activeFilter = useSelector(selectActiveFilter);
  const dispatch = useDispatch()

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{items.length}</strong> item
        {items.length > 1 &&'s'} left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={activeFilter === 'all' ? 'selected' : ''}
          onClick={()=>dispatch(editActiveFilter('all'))}>
            All
          </a>
        </li>
        <li>
          <a href="#/" className={activeFilter === 'active' ? 'selected' : ''} 
          onClick={()=>dispatch(editActiveFilter('active'))}>Active</a>
        </li>
        <li>
          <a href="#/" className={activeFilter === 'completed' ? 'selected' : ''}
          onClick={()=>dispatch(editActiveFilter('completed'))}>Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={()=>dispatch(clearCompleted())}>Clear completed</button>
    </footer>
  );
}

export default Filter;
