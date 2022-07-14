import React from "react";
import { getNotes,deleteNote } from "../redux/notes/notesSlice";
import { useSelector, useDispatch } from "react-redux";

function Notes() {
  const filtered = useSelector(getNotes);
  const dispatch = useDispatch();

  return (
    <div className="card w-100 mt-4">
      <div className="card-body row">
        {filtered.map((item) => {
          return (
            <div className="col-md-4 col-lg-3 my-2" key={item.id}>
              <div
                className="card"
                style={{ backgroundColor: item.color , height : '100%'}}
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
