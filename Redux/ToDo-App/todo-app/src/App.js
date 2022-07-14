import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Filter from "./components/Filter";

function App() {

  return (
    <>
      <section className="todoapp">
        <Header />

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <List />
        </section>

        <Filter />
      </section>

      <Footer />
    </>
  );
}

export default App;
