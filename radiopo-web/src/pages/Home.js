import './Home.css';

function Home(){
    return(
        <div className='main'>
            <div className="container">
                <div className="text-upper">
                    <h3>Keep Calm</h3> <h3>and</h3> <h3>listen on</h3>
                </div>
                <div className="text-lower">
                    <h3>Covering Radio Stations from all over the world.</h3>
                </div>
            </div>
            <div className='right-container'>
                <img className='radiopo-logo' src='https://i.postimg.cc/t4bdg7zK/radiopo-logo-transparent-white-2.png' alt='radiopo-logo'></img>
                <button className='invite-btn'>Invite to your Server.</button>
            </div>
        </div>
    );
}

export default Home;