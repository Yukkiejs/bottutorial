exports.run = async (bot, message, argumentos) => {

  message.reply(":ping_pong: | " + `${parseInt(client.ping)}` + ":arrow_left: essa é minha Latência no momento")
}
module.exports.help = {
  name:"ping"
}
