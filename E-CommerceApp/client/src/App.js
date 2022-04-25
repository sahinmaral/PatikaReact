import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Error404 from './pages/Error404';
import Basket from './pages/Basket';
import ProductDetail from './pages/ProductDetail';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div id='content'>
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/admin/*" element={
              <ProtectedRoute admin={true}>
                <Admin />
              </ProtectedRoute>
            } />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
