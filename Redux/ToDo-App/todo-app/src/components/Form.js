import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAsync } from "../redux/todos/services";

function Form() {
  const { addNewTaskAdding,error } = useSelector(
    (state) => state.todos
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await dispatch(addTaskAsync({ title: title }));
    setTitle("");
  };

  if(error){
    alert(error)
    return;
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        value={title}
        disabled={addNewTaskAdding}
        onChange={(e) => setTitle(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
      {
        addNewTaskAdding && <span style={{ paddingRight: "10px" }}>Loading...</span>
      }
      
    </form>
  );
}

export default Form;
