import { useDispatch } from "react-redux";
import {setFilter} from '../redux/notes/notesSlice'

function Filter() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      onChange={(e)=>dispatch(setFilter(e.target.value))}
      className="rounded-pill form-control w-50"
      placeholder="Search..."
      style={{
        display: "block",
        margin: "auto",
        height: "40px",
        padding: "20px",
      }}
    />
  );
}

export default Filter;
