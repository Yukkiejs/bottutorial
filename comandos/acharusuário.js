//const pra require("discord.js")
const Djs = require("discord.js")

//handler
exports.run = async (bot, message, argumentos) => {
   //let
  	let usuario = bot.users;

  	let achar = args[0];
  	if(!achar) return message.channel.send(":x: | <@" + message.author.id + "> Me diga uma # para eu achar de quem é.");

  	let procurar = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));

  	message.channel.send(matches.map(u => u.tag).join(", "));
  }

  module.exports.help = {
  	name: "acharusuário"
  }
}
