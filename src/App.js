import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/pages/about/About';
import Hunger from './components/pages/hunger-in-india/Hunger';
import Campaign from './components/pages/Campaign';
import Contact from './components/pages/Contact';
import Donate from './components/pages/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/hunger' element={<Hunger />}></Route>
          <Route path='/campaign' element={<Campaign />}></Route>
          <Route path='/contactus' element={<Contact />}></Route>
          <Route path='/donate' element={<Donate />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
