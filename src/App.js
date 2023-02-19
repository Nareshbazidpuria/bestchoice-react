import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home/index';
import Login from './components/login/index';
import Signup from './components/signup/index';
import Page404 from './components/page404';
import ForgotPassword from './components/forgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home key='home' />} />
        <Route path="/bestchoice-react" element={<Home key='home' />} />
        <Route path="/login" element={<Login key='login' />} />
        <Route path="/signup" element={<Signup key='signup' />} />
        <Route path="/forgot-password" element={<ForgotPassword key='forgot-password' />} />
        <Route path="*" element={<Page404 key='404' />} />
      </Routes>
    </Router>
  );
}

export default App;
