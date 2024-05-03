import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Product from './components/Product';
import Careers from './components/Careers';
import Community from './components/Community';
import Nomatch from './components/Nomatch'
function App() {
  return (
    <div>
      <div className='App'>
      <Navbar/>
      </div>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Pricing' element={<Pricing/>} />
          <Route path='/Product' element={<Product/>} />
          <Route path='/Careers' element={<Careers/>} />
          <Route path='/Community' element={<Community/>} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
    </div>
  );
}

export default App;
