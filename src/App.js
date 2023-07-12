import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import CartPage from './Pages/CartPage/CartPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Provider store={store} >

      <Router>

        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
          <Footer />
        </div>

      </Router>

    </Provider>

  );
}

export default App;
