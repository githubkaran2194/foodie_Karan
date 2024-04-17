import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import "tailwindcss/tailwind.css";
import HotItems from './Pages/HotItems';
import Menus from './Pages/Menus';
import SinglePage from './Pages/SinglePage';
import Cart from './Components/Cart';
import ContactForm from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div style={{ paddingTop: '64px' }}> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<HotItems />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/menus' element={<Menus />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/food/:id' element={<SinglePage/>} />
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
