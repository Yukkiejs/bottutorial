//Const pra falar que precisa do discord.js ( librarie )
const Djs = require("discord.js");

//handler
exports.run = async (bot, message, argumentos) => {

//var
var usuáriodoavatar = message.mentions.users.first() || message.author;

//embed inicio
var embed = new Djs.RichEmbed()
.setTitle("Avatar de " + usuáriodoavatar.username)
.setImage(user.displayAvatarURL)
.setColor(0000)
message.channel.send(embed);
}
//Definição do comando
module.exports.help = {
  name:"avatar"
}
