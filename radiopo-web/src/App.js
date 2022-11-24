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
          <Route path='/radiopo/' element={<Home />} />
          <Route path='/radiopo/commands' element={<Commands />} />
          <Route path='/radiopo/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
