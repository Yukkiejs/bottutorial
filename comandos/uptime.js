//Const pra falar que precisa do discord.js ( librarie )
const Djs = require("discord.js")
//Como instalar discord.js
//abre o Node.js command prompt
//cd pasta
//npm i discord.js

//Const pra falar que precisa do moment ( librarie )
const mm = require("moment");
//mesmo processo pra instalar o moment, só muda npm i discord.js pra npm i moment

//Mais um require aaaa ( prometo que é o ultimo )
require("moment-duration-format")

//handler
exports.run = async (bot, message, argumentos) => {
  //let
  let uptime = moment.duration(client.uptime).format('D [d], H [h], m [m], s [s]');

  //Mensagem
  message.reply(`Estou online faz ${uptime}`);
};
//Definição do comando
module.exports.help = {
  name:"uptime"
}
