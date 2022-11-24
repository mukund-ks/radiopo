import { Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
import Home from './pages/Home'
import Commands from './pages/Commands'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/commands' element={<Commands />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
