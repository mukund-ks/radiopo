import './CommandsStyles.css';

function Commands(){
    return(
        <div className='commands-container'>
            <div className="command">
                <h3>/play search</h3>
                <p>Searches the name of station provided as input and plays it.</p>
                <p>Find Station Names <a href='https://www.radio-browser.info/countries' target='_blank' rel='noreferrer'>here.</a></p>
            </div>
            <div className="command">
                <h3>/play top_five</h3>
                <p>Filters stations by top five voted.</p>
            </div>
            <div className="command">
                <h3>/exit</h3>
                <p>Disconnects the bot from active voice channel.</p>
            </div>
            <div className="command">
                <h3>/ping</h3>
                <p>Pings the <a href='https://www.radio-browser.info' target='_blank' rel='noreferrer'>Radio Browser</a> API for Statistics.</p>
            </div>
            <div className="command">
                <h3>/user</h3>
                <p>Gives information about the user.</p>
            </div>
            <div className="command">
                <h3>/server</h3>
                <p>Gives information about the server.</p>
            </div>
            <div className="command">
                <h3>/invite</h3>
                <p>Provides you with an invite link for the bot.</p>
            </div>
            <div className="command">
                <h3>/help</h3>
                <p>Learn about Radiopo.</p>
            </div>
        </div>
    );
}

export default Commands;