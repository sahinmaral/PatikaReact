import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ConvertedText from "./components/ConvertedText";
import {
  getIsShowingExample,
  getText,
  setIsShowingExample,
  setText,
} from "./redux/markdownSlice";

function App() {
  const text = useSelector(getText);
  const isShowingExample = useSelector(getIsShowingExample);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "10px" }}>
      <div className="d-flex justify-content-between">
        <h1 className="header-area">Markdown Previewer</h1>
        <div
          className={isShowingExample ? "help-button-active" : "help-button"}
          onClick={() => dispatch(setIsShowingExample())}
        >
          <i className="fa fa-question" aria-hidden="true"></i>
        </div>
      </div>

      <div className="grid-container container">
        <div className="area">
          <textarea
            disabled={isShowingExample}
            className="area"
            value={text}
            onChange={(e) => dispatch(setText(e.target.value))}
          ></textarea>
        </div>
        <div className="area">
          <ConvertedText />
        </div>
      </div>
    </div>
  );
}

export default App;
