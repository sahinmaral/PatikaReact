import { useSelector, useDispatch } from "react-redux";
import { changeIsIncludeHTML, changeParagraphCount, getTextInformationObject } from "../redux/textSlice";

function TextOption() {
    const textInfoObject = useSelector(getTextInformationObject);
    const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between">
          <div>
            <label className="form-label" htmlFor="paragraphCount">
              Paragraph
            </label>
            <br />
            <input
              type="number"
              className="form-control"
              min="1"
              max="10"
              id="paragraphCount"
              onChange={(e) => dispatch(changeParagraphCount(e.target.value))}
              value={textInfoObject.paragraphCount}
            />
          </div>

          <div>
            <label className="form-label" htmlFor="isIncludeHTML">
              Include HTML
            </label>
            <br />
            <select
              value={textInfoObject.isIncludeHTML}
              onChange={(e) => dispatch(changeIsIncludeHTML(e.target.value))}
              className="form-select"
              aria-label="Default select example"
              id="isIncludeHTML"
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
        </div>
  )
}

export default TextOption