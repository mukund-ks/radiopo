import { Link } from 'react-router-dom';
import './NavbarStyles.css';

function Navbar(){
    return(
        <div className='Navbar-container'>
            <div className='logo-container'>
                <img  className='radiopoLogo' src='https://i.postimg.cc/jdHNBtrZ/radiopo-logo-transparent-white-2.png' alt='radiopo-logo'></img>
                <a href='/radiopo/' className='siteTitle'>
                    Radiopo
                </a>
            </div>
            <nav className='Navbar'>
                <ul>
                    <button className='btn'>
                        <Link to='/'>Home</Link>
                        {/* <a href='/radiopo/'>Home</a> */}
                    </button>
                    <button className='btn'>
                        <Link to='/commands/'>Commands</Link>
                        {/* <a href='/radiopo/commands/'>Commands</a> */}
                    </button>
                    <button className='btn'>
                        <Link to='/about/'>About</Link>
                        {/* <a href='/radiopo/about/'>About</a> */}
                    </button>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;