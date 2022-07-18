import "./App.css";
import { Routes, Route } from "react-router-dom";
import EditContact from "./pages/EditContact";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div
      className="container p-5"
      style={{ marginTop: "200px", backgroundColor: "#eff7ff" }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
