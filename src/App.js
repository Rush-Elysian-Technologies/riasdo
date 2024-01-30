import Header from './components/Header';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import './App.css';
// Pages
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
       <Route path='/' element={<Home />} />
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
