import './NavbarStyles.css';

function Navbar(){
    return(
        <nav className='Navbar'>
            <a href='/' className='siteTitle'>
                <img  className='radiopoLogo' src='https://i.postimg.cc/vBhkLgP6/radiopo-logo-transparent-white.png' alt='radiopo-logo'></img>
                Radiopo
            </a>
            <ul>
                <button className='btn'>
                    <a href='/'>Home</a>
                </button>
                <button className='btn'>
                    <a href='/commands'>Commands</a>
                </button>
                <button className='btn'>
                    <a href='/about'>About</a>
                </button>
            </ul>
        </nav>
    );
}

export default Navbar;