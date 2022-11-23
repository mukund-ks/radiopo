import './NavbarStyles.css';

function Navbar(){
    return(
        <div className='Navbar-container'>
            <div className='logo-container'>
                <img  className='radiopoLogo' src='https://i.postimg.cc/jdHNBtrZ/radiopo-logo-transparent-white-2.png' alt='radiopo-logo'></img>
                <a href='/' className='siteTitle'>
                    Radiopo
                </a>
            </div>
            <nav className='Navbar'>
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
        </div>
    );
}

export default Navbar;