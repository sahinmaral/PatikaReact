import "./App.css";
import CharacterList from "./pages/CharacterList";
import { Routes, Route, Link } from "react-router-dom";
import CharacterDetail from "./pages/CharacterDetail";
import QuotesList from "./pages/QuotesList";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg rounded-3 my-2" style={{backgroundColor: '#e3f2fd'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Breaking Bad API
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/quotes">
                  Quotes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/quotes" element={<QuotesList />} />
        <Route path="/quotes/:id" element={<QuoteDetail />} />
      </Routes>
    </div>
  );
}

export default App;
