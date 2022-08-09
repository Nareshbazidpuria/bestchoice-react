import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home key='home' />} />
        <Route path="/login" element={<Login key='login' />} />
        <Route path="/register" element={<Register key='register' />} />
      </Routes>
    </Router>
  );
}

export default App;
