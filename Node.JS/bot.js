const discordjs = require('discord.js');
const client = new discordjs.Client();

client.on('ready', () => {
	console.log("OOF")
})

client.login('TOKEN_HERE')