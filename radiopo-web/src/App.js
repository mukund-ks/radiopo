import { Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
import Home from './pages/Home'
import Commands from './pages/Commands'
import About from './pages/About'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/commands' element={<Commands />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
