import { useEffect , useState} from "react";
import { getNotes, deleteNote, getFilter } from "../redux/notes/notesSlice";
import { useSelector, useDispatch } from "react-redux";

function Notes() {
  const items = useSelector(getNotes);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    setFiltered(items.filter((item) => item.note.includes(filter)));
  }, [filter,items]);

  return (
    <div className="card w-100 mt-4">
      <div className="card-body row">
        {filtered.map((item) => {
          return (
            <div className="col-md-4 col-lg-3 my-2" key={item.id}>
              <div
                className="card"
                style={{ backgroundColor: item.color, height: "100%" }}
              >
                <div className="card-body">
                  <button
                    className="btn float-end border-0 text-danger"
                    onClick={() => dispatch(deleteNote(item.id))}
                  >
                    X
                  </button>
                  <p className="card-text fw-semibold">{item.note}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
