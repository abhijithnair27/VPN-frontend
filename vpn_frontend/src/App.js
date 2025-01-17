import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import RegisterHome from './pages/RegisterHome';
import ReportFirs from './pages/ReportFirs';
import ViewFirs from './pages/ViewFirs';


import Home from './pages/Home';
import Registers from './pages/Register';
import Logins from './pages/Login';


import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<RegisterHome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Registers />} />
      <Route path="/login" element={<Logins />} />
      <Route path="/reportfir" element={<ReportFirs />} />
      <Route path="/viewfir" element={<ViewFirs />} />


      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );
}

export default App;
