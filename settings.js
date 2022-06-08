//═══════════════════════════════════════════════════════//
//
//                              𝙼𝙴𝙴𝙳 𝙱𝙾𝚃 𝒷𝓎 𝓂ℴ𝒽𝒶𝓂ℯℯ𝒹
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙼𝙴𝙴𝙳𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙼𝙾𝙷𝙰𝙼𝙴𝙴𝙳
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['212609536856']
global.premium = ['212609536856']
global.ownernomer = '212609536856'
global.ownername = '𝙼𝙾𝙷𝙰𝙼𝙴𝙴𝙳'
global.botname = '𝙼𝙴𝙴𝙳-𝙱𝙾𝚃'
global.footer = '©𝑚𝑒𝑒𝑑𝑏𝑜𝑡.'
global.ig = 'https://www.instagram.com/moha____me_d/'
global.region = 'Espan,Nadrid,𝒎𝒆𝒆𝒅'
global.sc = 'https://github.com/Killua207x/Gojo-Satoru'
global.myweb = 'https://www.instagram.com/moha____me_d/'
global.packname = '[𝑴𝒆𝒆𝒅🤨💙][212609536856]'
global.author = 'هـــز ولاڪــيـــن مــتــعـــيـــقـــش'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'هـــذا الامـــر خـــاص بـــادمـــيـــن المـــجـــمـــوعـــة!',
    botAdmin: 'هـــذا المـــر خـــص بادمـــيـــن الـــبـــوت!',
    owner: 'هـــذا الامـــر خـــاص بـــصـــاحـــب الـــبـــوت!',
    group: 'هـــذا الامـــر خـــاص بالمـــجـــمـــوعـــات!',
    private: 'هـــذا الامـــر خـــاص بالـــمـــحـــادثة الخـــاصـــة!',
    bot: 'هــذا الامـــر خـــاص بـــصـــاحـــب الـــبـــوت',
    wait: 'جـــاري الـــتـــحـــمـــيـــل...',
    error: 'خـــطأ!',
    endLimit: 'وقــتــڪ الـــيـــومـــي انـــتـــهـــﯽ انـــتـــظـــر 12 ســـاعــة',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
