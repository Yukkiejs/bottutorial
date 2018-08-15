//const pra falar que require("discord.js") ( discord.js === uma librarie que permite a gente fazer bot pra discord em js )
const Djs = require("discord.js");

//handler
exports.run = async (bot, message, argumentos) => {

  //lets
  let punirUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let punirMotivo = args.join(" ").slice(22)
  let câncer = message.guild.member(punirUser);
  let channel = message.guild.channels.find('name', "nomedocanalquevocêvaimandarmensagem")

  //métodos
  if(!punirUser) return message.channel.send(":x: | <@" + message.author.id + ">, você não me falou alguem para eu punir")
  if(!punirUser.bannable) return message.channel.send(":x: | <@" + message.author.id + ">, essa pessoa não pode ser banida")
  if(!punirMotivo) return message.channel.send(":x: | <@" + message.author.id + ">, você não me deu um motivo para eu punir essa pessoa")
  if(!bot.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: | <@" + message.author.id + ">, eu não tenho permissão para banir alguem, me desculpe")

  //embed
  var embed = new Djs.RichEmbed()
  .setTitle("Punição")
  .setThumbnail(punirUser.displayAvatarURL)
  .addField("Punido por", '<@' + message.author.id + '>')
  .addField("ID de quem puniu", message.author.id)
  .addField("Quem foi punido", '<@' + punirUser.id + '>')
  .addField("ID de quem foi punido", punirUser.id)
  .addField("Motivo da punição", punirMotivo)
  .addField("Canal", `<@${message.channel.id}>`)
  .addField("ID do Canal", `${message.channel.id}`)
  .addField("Tempo", `${message.createdAt}`);

//ban
  câncer.ban(punirMotivo);
//se não existir o canal ele manda uma msg no pv do criador da guild
  if(!channel) return message.guild.owner.send(":x: | <@" + message.guild.owner.id + ">, não achei o canal punições, poderia cria-lo para mim ?");
  //manda a embed
  channel.send(embed)
}
//definição do comando
module.exports.help = {
  name:"punir"
}
