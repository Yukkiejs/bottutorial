//Const require discord.js
const Djs = require("discord.js");

//handler
exports.run = async (bot, message, argumentos) => {

//delete
message.delete();

//let
let usu�rioK = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

let motivoK = args.join(" ").slice(22);

let kickK = message.guild.member(usu�rioK);

let channelK = message.guild.channels.find('name', "puni��es")


//m�todos
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: | <@" + message.author.id + ">, voc� n�o tem permiss�o"!");

if(!usu�rioK.kickable) return message.channel.send(":x: | <@" + message.author.id + ">, essa pessoa n�o pode ser kickada!");

if(!motivoK) return message.channel.send(":x: | <@" + message.author.id + ">, voc� n�o colocou um motivo para eu kickar essa pessoa")

if(!usu�rioK) return message.channel.send(":x: | <@" + message.author.id + ">, voc� n�o mencionou alguem para eu kickar");

if(!bot.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: | <@" + message.author.id + ">, n�o tenho permiss�o de KICK");

if(!channelK) return message.guild.owner.send("N�o achei o canal puni��es");

//embed
var embed = new Djs.RichEmbed()
.setDescription("Kick")
.setColor("#F0000")
.addField("Usu�rio Kickado", `${kUser}`)
.addField("ID do Usu�rio Kickado", `${kUser.id}`)
.addField("Kickado por", `<@${message.author.id}>`)
.addField("ID de quem Kickou", `${message.author.id}`)
.addField("Kickado em", message.channel)
.addField("ID do canal", message.channel.id)
.addField("Motivo do kick", motivoK
.addField("Tempo", message.createdAt)

//kick

kickK.kick(motivoK);
channelK.send(embed)
}

//Defini��o

module.exports.help = {
name:"kick"
} 