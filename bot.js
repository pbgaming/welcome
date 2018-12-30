const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520153404438347779");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To Epic Shop**`), 4000)        
}
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520270925560807450");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`#role humans epic`), 4000)        
}
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
