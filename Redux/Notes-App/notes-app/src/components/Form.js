import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";

function Form() {
  const [item, setItem] = useState({ color: "#f06292" });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNote(item));
  };

  return (
    <div className="card w-100 mt-4" style={{ height: "210px" }}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              value={item.note}
              onChange={(e) => setItem({ ...item, note: e.target.value })}
              className="form-control border-0"
              placeholder="Enter your note here..."
              style={{ resize: "none" }}
              rows="4"
            />
          </div>

          <div className="mt-3 p-2 border d-flex justify-content-between">
            <div className="dropdown color-box-dropdown">
              <button
                className="btn dropdown-toggle border-1 border-dark"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Colors
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenu2"
                style={{ minWidth: "85px" }}
              >
                <li>
                  <button
                    type="button"
                    className="btn rounded-circle ms-4 my-1"
                    onClick={() => setItem({ ...item, color: "#f06292" })}
                    style={{
                      backgroundColor: "#f06292",
                      height: "37px",
                      width: "38px",
                    }}
                  >
                    {item.color === "#f06292" && <span>&#10003;</span>}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn rounded-circle ms-4 my-1"
                    onClick={() => setItem({ ...item, color: "#ba68c8" })}
                    style={{
                      backgroundColor: "#ba68c8",
                      height: "37px",
                      width: "38px",
                    }}
                  ></button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn rounded-circle ms-4 my-1"
                    onClick={() => setItem({ ...item, color: "#ffd54f" })}
                    style={{
                      backgroundColor: "#ffd54f",
                      height: "37px",
                      width: "38px",
                    }}
                  ></button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn rounded-circle ms-4 my-1"
                    onClick={() => setItem({ ...item, color: "#4fc3f7" })}
                    style={{
                      backgroundColor: "#4fc3f7",
                      height: "37px",
                      width: "38px",
                    }}
                  ></button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setItem({ ...item, color: "#aed581" })}
                    className="btn rounded-circle ms-4 my-1"
                    style={{
                      backgroundColor: "#aed581",
                      height: "37px",
                      width: "38px",
                    }}
                  ></button>
                </li>
              </ul>
            </div>
            <div className="color-box">
              <button
                type="button"
                className="btn rounded-circle"
                onClick={() => setItem({ ...item, color: "#f06292" })}
                style={{
                  backgroundColor: "#f06292",
                  height: "37px",
                  width: "38px",
                }}
              >
                {item.color === "#f06292" && <span>&#10003;</span>}
              </button>
              <button
                type="button"
                className="btn rounded-circle ms-2"
                onClick={() => setItem({ ...item, color: "#ba68c8" })}
                style={{
                  backgroundColor: "#ba68c8",
                  height: "37px",
                  width: "38px",
                }}
              >
                {item.color === "#ba68c8" && <span>&#10003;</span>}
              </button>
              <button
                type="button"
                className="btn rounded-circle ms-2"
                onClick={() => setItem({ ...item, color: "#ffd54f" })}
                style={{
                  backgroundColor: "#ffd54f",
                  height: "37px",
                  width: "38px",
                }}
              >
                {item.color === "#ffd54f" && <span>&#10003;</span>}
              </button>
              <button
                type="button"
                className="btn rounded-circle ms-2"
                onClick={() => setItem({ ...item, color: "#4fc3f7" })}
                style={{
                  backgroundColor: "#4fc3f7",
                  height: "37px",
                  width: "38px",
                }}
              >
                {item.color === "#4fc3f7" && <span>&#10003;</span>}
              </button>
              <button
                type="button"
                onClick={() => setItem({ ...item, color: "#aed581" })}
                className="btn rounded-circle ms-2"
                style={{
                  backgroundColor: "#aed581",
                  height: "37px",
                  width: "38px",
                }}
              >
                {item.color === "#aed581" && <span>&#10003;</span>}
              </button>
            </div>
            <button
              type="submit"
              className="btn rounded-pill"
              style={{
                backgroundColor: "#44c767",
                width: "130px",
                padding: "0px",
                color: "white",
              }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
