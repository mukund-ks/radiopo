![alt text](https://i.postimg.cc/Lsvj7dnY/radiopo-logo-transparent-white-2.png "Radiopo")

RADIOPO
=======
 A bot to play your favourite Radio Stations from the comfort of your Discord Server.

[Add to your server](https://discord.com/api/oauth2/authorize?client_id=1042031895711592520&permissions=1002912081984&scope=bot)

Visit the website [here](https://radiopo.xyz/).

Commands
========
* `/play search` - Searches stations to play.
  * Parameters: `name` - *specific name of Radio Station to play [^1]*, `channel` - *describes the voice channel to join*

* `/play top_five` - Filters stations by Top-Votes.
  * Parameters: `name` - *an integer input b/w 1 and 5, indicating the ranking of stations*, `channel` - *describes the voice channel to join*
 
* `/exit` - Disconnects the bot from active voice channel.

* `/ping` - Pings the [Radio Browser](https://www.radio-browser.info/) API for Statistics.

* `/user` - Gives information about the user who ran the command.

* `/server` - Gives information about the Discord Server.

* `/invite` - Gives the Bot invite link.

* `/help` - Learn about Radiopo.

Built with
==============
[NodeJS](https://nodejs.org/en/about/)

[Radio Browser](https://www.radio-browser.info/) - The API used to fetch Station information and streaming URLS.

[Radio Browser API Client](https://github.com/nepodev/radio-browser) - NodeJS module for Radio-browser API.

[Discord.js](https://discord.js.org/#/) - NodeJS module for Discord.

 [^1]: List of Radio Stations [here](https://www.radio-browser.info/countries).
