import './App.css';
import Header from './commponent/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './commponent/Home';
import Contect from './commponent/Contect';
import Product from './commponent/Product';
import About from './commponent/About';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
