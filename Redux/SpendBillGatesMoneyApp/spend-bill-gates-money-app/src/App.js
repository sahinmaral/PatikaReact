import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

import Receipt from "./components/Receipt";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <ItemList />
      </div>
      <Receipt />
    </>
  );
}

export default App;
