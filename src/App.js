// import Header from './components/Header';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import './App.css';
// Pages
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Testimonials from './components/pages/Testimonials';
import Blog from './components/pages/Blog';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <>
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/aboutUs' element={<AboutUs />} />
       <Route path='/services' element={<Services />} />
       <Route path='/portfolio' element={<Portfolio />} />
       <Route path='/testimonials' element={<Testimonials />} />
       <Route path='/blog' element={<Blog />} />
       <Route path='/contactUs' element={<ContactUs/>} />

    </Routes>
    <Footer/>
  </>
  );
}

export default App;
