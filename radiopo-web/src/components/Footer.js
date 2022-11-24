import './FooterStyles.css';

function Footer(){
    return(
        <div className='Footer'>
            <div className='copyright'>
                <h3>© 2022 Radiopo</h3>
            </div>
            <div className='content'>
                <h3>
                    <a href='https://discord.com/api/oauth2/authorize?client_id=1042031895711592520&permissions=418796398656&scope=bot' target='_blank' rel='noreferrer'>Invite</a>
                </h3>
                <h3>
                    <a href='https://github.com/mukund-ks/radiopo' target='_blank' rel='noreferrer'>Github</a>
                </h3>
                <h3>
                    <a href='https://github.com/mukund-ks/radiopo/issues' target='_blank' rel='noreferrer'>Report Issues</a>
                </h3>
                <h3>
                    <a href='https://discord.gg/RP6HwWAtcK' target='_blank' rel='noreferrer'>Support</a>
                </h3>
            </div>
        </div>
    );
}

export default Footer;