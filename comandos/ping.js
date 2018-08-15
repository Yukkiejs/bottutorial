//Primeiro comando
//Export pro handler funcionar
exports.run = async (bot, message, argumentos) => {
//Sistema de ping Pong
  message.reply(":ping_pong: | " + `${parseInt(client.ping)}` + ":arrow_left: essa é minha Latência no momento")
}
//Registra o comando
module.exports.help = {
  name:"ping"
}
