const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();

client.once('ready', () => {
    console.log(`${client.user.tag} is ready`);
});
client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("936914001252741150")
    let targetchannel = '938523199564554261' 
    if(welcomeChannel){

        let welcomeEmbed = new discord.MessageEmbed()
        if(member.user.bot){

        if(member.user.client){

            welcomeEmbed.setColor(colors.black)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> به سرور ما خوش اومدی برای عضویت در فمیلی در چنل ${member.guild.channels.cache.get(targetchannel).toString()} تیکت باز کن ، امیدوارم لحظات خوشی رو سپری کنی`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username} (=`)
            welcomeChannel.send(welcomeEmbed)
        }}else{
            welcomeEmbed.setColor(colors.black)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`سلام <@${member.user.id}> به سرور ما خوش اومدی برای عضویت در فمیلی در چنل ${member.guild.channels.cache.get(targetchannel).toString()} تیکت باز کن ، امیدوارم لحظات خوشی رو سپری کنی`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username}  (=  `)
            welcomeChannel.send(welcomeEmbed)
        }
    }else{
        console.log("Welcome Channel Yaft Nashod")
    }
})
client.on("ready", () => {
    function YousamPower() {
      let hungry = ["TEST 1" , "TEST 2", "TEST 3" ]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "DISCORD", url: "https://discord.gg/X8J5xbjXwJ"});
    }; setInterval(YousamPower, 2000)
  });
client.login(botconfig.token);

