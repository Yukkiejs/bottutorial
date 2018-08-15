//Const require discord.js
const Djs = require("discord.js");

//handler
exports.run = async (bot, message, argumentos) => {

//delete
message.delete();

//let
let usuárioK = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

let motivoK = args.join(" ").slice(22);

let kickK = message.guild.member(usuárioK);

let channelK = message.guild.channels.find('name', "punições")


//métodos
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: | <@" + message.author.id + ">, você não tem permissão"!");

if(!usuárioK.kickable) return message.channel.send(":x: | <@" + message.author.id + ">, essa pessoa não pode ser kickada!");

if(!motivoK) return message.channel.send(":x: | <@" + message.author.id + ">, você não colocou um motivo para eu kickar essa pessoa")

if(!usuárioK) return message.channel.send(":x: | <@" + message.author.id + ">, você não mencionou alguem para eu kickar");

if(!bot.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: | <@" + message.author.id + ">, não tenho permissão de KICK");

if(!channelK) return message.guild.owner.send("Não achei o canal punições");

//embed
var embed = new Djs.RichEmbed()
.setDescription("Kick")
.setColor("#F0000")
.addField("Usuário Kickado", `${kUser}`)
.addField("ID do Usuário Kickado", `${kUser.id}`)
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

//Definição

module.exports.help = {
name:"kick"
} 