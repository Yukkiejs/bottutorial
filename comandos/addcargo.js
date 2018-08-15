//Const pra falar que precisa da librarie discord.js
const Djs = require("discord.js");

//handler
exports.run = async (bot, message, argumentos) => {

 //var
 var usuario =
 message.guild.member(message.mentions.users.firts()) ||
 message.guild.members.get(args[0]));

var cargo = args.join(" ").slice(22);

var procurarrole = message.guild.roles.find('name', `${cargo}`)

 //método de check permissions
 if(!message.member.hasPermission('MANAGE_ROLES'))
 return message.reply(':x: | <@' + message.author.id + '>, você não tem permissão de fazer isso')

//set role
message.guild.members.get(`${usuario}`).addRole(procurarrole)
          message.reply("Cargo adicionado com sucesso")
}
//Definição do comando
module.exports.help = {
name:"addcargo"
}
