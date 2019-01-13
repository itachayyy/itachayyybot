const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready',  () => {
            console.log(`Legend never die`);
    client.user.setGame("Legends never die", "https://www.twitch.tv/idk");
});

 
 
 

client.login("process.env.BOT_TOKEN");
