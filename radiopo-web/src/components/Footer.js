import './FooterStyles.css';

function Footer(){
    return(
        <div className='Footer'>
            <div className='copyright'>
                <p>© 2022 Radiopo</p>
            </div>
            <div className='content'>
                <ul>
                    <button className='bton'>
                        <a href='https://github.com/mukund-ks/radiopo' target='_blank' rel='noreferrer'>Github</a>
                    </button>
                    <button className='bton'>
                        <a href='https://discord.com/api/oauth2/authorize?client_id=1042031895711592520&permissions=418796398656&scope=bot' target='_blank' rel='noreferrer'>Invite</a>
                    </button>
                    <button className='bton'>
                        <a href='https://github.com/mukund-ks/radiopo/issues' target='_blank' rel='noreferrer'>Issues</a>
                    </button>
                    <button className='bton'>
                        <a href='https://discord.gg/RP6HwWAtcK' target='_blank' rel='noreferrer'>Support</a>
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Footer;