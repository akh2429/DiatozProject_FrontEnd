import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import CartPage from './Pages/CartPage/CartPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
