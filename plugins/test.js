let handler = async function(m, { conn, args, isPrems, isOwner }) {

const bot = m.key.remoteJid
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      this.reply(m.chat, 'Bye Semua owner ku galak amat😞', m)
      await sleep(5000)
  await conn.groupLeave(bot)
}
handler.help = ['wibu']
handler.tags = ['wibu']
handler.command = /^(wibu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
