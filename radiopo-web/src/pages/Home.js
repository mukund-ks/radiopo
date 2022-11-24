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
                <a href='https://discord.com/api/oauth2/authorize?client_id=1042031895711592520&permissions=418796398656&scope=bot' target='_blank' rel='noreferrer'>
                    <button className='invite-btn'>Invite to your Server</button>
                </a>
            </div>
        </div>
    );
}

export default Home;