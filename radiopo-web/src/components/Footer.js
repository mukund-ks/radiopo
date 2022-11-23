import './FooterStyles.css';

function Footer(){
    return(
        <div className='Footer'>
            <div className='copyright'>
                <h3>© 2022 Radiopo</h3>
            </div>
            <div className='content'>
                <h3>
                    <a href='https://discord.com/oauth2/authorize?client_id=1042031895711592520&permissions=1002912081984&scope=bot'>Invite</a>
                </h3>
                <h3>
                    <a href='https://github.com/mukund-ks/radiopo'>Github</a>
                </h3>
                <h3>
                    <a href='https://github.com/mukund-ks/radiopo'>Support</a>
                </h3>
            </div>
        </div>
    );
}

export default Footer;