const connect = require('./connect')
const chalk = require('chalk')

const megayaa = connect.megayaa


exports.runtime = () => {
    seconds = process.uptime()
    seconds = Number(seconds)
    var d = Math.floor(seconds / (3600 * 24))
    var h = Math.floor(seconds % (3600 * 24) / 3600)
    var m = Math.floor(seconds % 3600 / 60)
    var s = Math.floor(seconds % 60)
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : ""
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : ""
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : ""
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : ""
    return dDisplay + hDisplay + mDisplay + sDisplay;
}


exports.FakeStatusImgForwarded = (from, image, caption, faketeks) => {
	megayaa.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./lib/image/fakereply.jpeg`)} } }, caption: caption, contextInfo: {"forwardingScore": 999, "isForwarded": true} })
}


exports.admin = (list, groupName) => {
    var text = `╭───「 Admin 」
│
├❏ Group : ${groupName}
├❏ Total : ${list.length} admin(s)
│
`
    for (var x of list) {
        text += `├❏ @${x.split("@")[0]}\n`
    }
    text += `│
╰───「 LoL Human 」
`
    return text
}
