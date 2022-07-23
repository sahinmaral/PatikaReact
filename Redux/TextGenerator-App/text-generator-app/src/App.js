import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getTextInformationObject } from "./redux/textSlice";
import { useEffect } from "react";
import { getParagraphAsync } from "./redux/service";
import TextOption from "./components/TextOption";
import Footer from "./components/Footer";

function App() {
  const textInfoObject = useSelector(getTextInformationObject);
  const paragraph = useSelector((state) => state.text.paragraph);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getParagraphAsync(textInfoObject));
    })();
  }, [textInfoObject, dispatch]);

  return (
    <>
      <div className="header-box">
        <h1 className="text-center">React sample text generator app</h1>
        <hr />
        <TextOption />
        <div className="paragraph-box">
          <p>{paragraph}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
