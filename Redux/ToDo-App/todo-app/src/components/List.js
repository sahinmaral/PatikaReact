import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectActiveFilter,
} from "../redux/todos/todosSlice";
import Loading from "./Loading";
import Error from "./Error";
import { getTasksAsync, toggleTaskAsync,deleteTaskAsync } from "../redux/todos/services";

function List() {
  const items = useSelector(selectTasks);
  const activeFilter = useSelector(selectActiveFilter);
  const { isLoading, error } = useSelector((state) => state.todos);
  const [filtered, setFiltered] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (activeFilter) {
      case "all":
        setFiltered(items);
        break;
      case "active":
        setFiltered(items.filter((item) => item.completed === false));
        break;
      case "completed":
        setFiltered(items.filter((item) => item.completed === true));
        break;
      default:
        break;
    }
  }, [activeFilter, items]);

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTaskAsync({ id, input: { completed } }));
  };

  const handleDelete = async (id) => {
    await dispatch(deleteTaskAsync(id));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <ul className="todo-list">
      {filtered.map((task) => {
        return (
          <li className={task.completed ? "completed" : ""} key={task.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => handleToggle(task.id, !task.completed)}
              />
              <label>{task.title}</label>
              <button
                className="destroy"
                onClick={() => handleDelete(task.id)}
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
