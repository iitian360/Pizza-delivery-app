import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/partials/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/partials/Footer';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
