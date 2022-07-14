import "./App.css";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Notes from "./components/Notes";

function App() {

  return (
    <div className="container mt-3">
      <h1 className="text-center text-secondary">NotesApp</h1>
      <Filter />
      <Form />
      <Notes />
    </div>
  );
}

export default App;
