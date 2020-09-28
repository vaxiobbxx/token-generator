const { Client, Collection, MessageEmbed } = require('discord.js');
const bot = new Client();

bot.on('ready', () => {
    console.log("Ready!");

});

bot.on('message', msg =>{
    let member = msg.mentions.members.first();
    if (!member) member = msg.member;

    if (msg.content == `v.me!gentoken`) {

    var rsg = function randomString() {
            var chars = "0123456789abcdefghiklmnopqrstuvwxyz";
            var string_length = 32;
            var randomstring = '';
            for (var i=0; i<string_length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                randomstring += chars.substring(rnum,rnum+1);
            }
            msg.channel.send(
                new MessageEmbed()
                .setTitle(`Token Generated!`)
                .addField(`User: `, `${member}`, false)
                .addField(`Token: `, `${randomstring}`, false), console.log(`Token Generated: ${randomstring}`)
                );

        }

         rsg()
        }
    
    
});
bot.login('bot token')