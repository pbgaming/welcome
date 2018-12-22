const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520153404438347779");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome To Epic Shop`), 4000)        
}
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Epic Shop`,"http://twitch.tv/YouTube")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
