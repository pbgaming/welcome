const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520153404438347779");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** Welcome To Epic Shop**  :EpicShop: 
              -  **We Hope You Like It**  :gift_heart:`), 4000)        
}
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520270925560807450");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`#role humans epic`), 4000)        
}
});

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "invite");
    logChannel.send(`${member} Invited by: <@${inviter.id}>`);
  });
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
