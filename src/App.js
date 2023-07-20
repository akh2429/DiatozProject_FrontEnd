import './App.css';
import LandingPage from './Pages/HomePage/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Reduxstore';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/LoginPage/Login';
import Signup from './Pages/SignUpPage/Signup';
import FavouritePage from './Pages/FavouritePage/FavouritePage';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/landingPage' element={<LandingPage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/favourite' element={<FavouritePage />} />
          </Routes>
          <ToastContainer position='bottom-left' />
          <Footer />
        </div>
      </Router>
    </Provider>

  );
}

export default App;
