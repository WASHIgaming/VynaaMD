import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [

 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《██████████▒▒▒》',
 '《█████████████》',
 '《██████████▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《██████████▒▒▒》',
 '《█████████████》',
 '《██████████▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《██████████▒▒▒》',
 '《█████████████》',
 '《██████████▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《██████████▒▒▒》',
 '《█████████████》',
 '《██████████▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《██████████▒▒▒》',
 '《█████████████》',
 '《██████████▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《██████████▒▒▒》',
 '《█████████████》',
 '《██████████▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》', 
 '*UDAH🗿*',
 '*GEDE🗿🗿*',
 '*MASI🗿🗿🗿*',
 '*CARI🗿🗿🗿🗿*',
 '*ESCEH🗿🗿🗿🗿🗿*',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《██████████▒▒▒》',
 '《█████████████》',
 '《██████████▒▒▒》',
 '《███████▒▒▒▒▒▒》',
 '《████▒▒▒▒▒▒▒▒▒》',
 '《██▒▒▒▒▒▒▒▒▒▒▒》',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = ` ❏ *_SCRIPT_*
 Hai kak 👋 Mau buy kebutuhan bot wa
 Semua list kami ada di sini ya kak
 silahkan pilih dan lihat 
❏ https://linkbio.co/VLShop
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `© VLShop - Official`,
      body: global.author,
      thumbnailUrl: `https://telegra.ph/file/f62d9e1c2a93877e2674a.jpg`,
      sourceUrl: `https://chat.whatsapp.com/EgDgZS8tCDC86RHnazVQ00`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(sc|script)$/i;

export default handler;