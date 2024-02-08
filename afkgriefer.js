const mineflayer = require("mineflayer")
const readline = require("readline-sync")
const gradient = require("gradient-string")
const config = require("./config.json")
const portals = require("./portals.json")
const fs = require("fs")
const Movements = require("mineflayer-pathfinder").Movements;
const { GoalNear, GoalBlock } = require("mineflayer-pathfinder").goals;
const axios = require('axios');
const { pathfinder } = require("mineflayer-pathfinder")
const { log } = require("console")
process.title = "AFKGriefer by TOBIBLASTER0912 | Der AFK GrieferGames Bot, der alles kann!"
console.clear()
async function sendToWebhook(message) {
  const webhook = config.webhook;

  if (!webhook) {
    return;
  }

  const data = {
    content: message,
  };

  try {
    await axios.post(webhook, data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return;
    } else {
      console.error(gradient.rainbow("Ein Fehler ist beim Senden an Discord aufgetreten! Bitte melde dies umgehend:"), error);
    }
  }
}






if (!config.gmailaccount){
    const nominecraftaccount = readline.question(gradient.passion(`Du hast bist jetzt noch nicht deinen Minecraft-Account registriert!
    Gib die E-Mail Adresse des Accounts jetzt hier ein (Falls du die E-Mail falsch eingegeben hast, kannst du sie später ändern.): `))
    if (nominecraftaccount.includes("@")) {
    config.gmailaccount = nominecraftaccount;
    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
    console.log(gradient.rainbow("Deine E-Mail " + nominecraftaccount + " wurde erfolgreich gespeichert! Ab jetzt musst du sie nie wieder eingeben :)"))
  } else {
    console.clear()
    console.log(gradient.rainbow("Bist du dir sicher, dass das eingegebene eine E-Mail ist? Bitte Starte das Skript neu und checke deine E-Mail Adresse!"))
    process.exit(1)
  }
}

if (config.firststart == "true") {
config.firststart = "false"
fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
console.clear()
console.log(gradient.instagram(`Dies ist die Konfiguration. Du kannst sie jederzeit im Hauptmenü ändern mit dem Command "Einstellungen".`))
const nicknameactive = readline.question(gradient.passion("Möchtest du dich nicken, sobald du auf deinen CB gejoint bist? (Ja/Nein): "))
if (nicknameactive == "ja" || nicknameactive == "j") {
  config.nicknameactive = "true"
  fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
  const nickname = readline.question(gradient.passion("Ok. Wie möchtest du genicht werden? (Standart: AFK) Gib hier deinen Nickname ein. (oder schreibe Standart um den standart beizubehalten): "))
  if (nickname == "Standart") {
    config.nickname = "AFK"
    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
  } else {
    config.nickname = nickname
    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
  }
} else if (nicknameactive == "nein" || nicknameactive == "n") {
  config.nickname = "false"
  fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
}
const autoreply = readline.question(gradient.passion("Möchtest du Automatisch auf MSG`s Antworten? Ja/Nein: "))
if (autoreply == "ja" || autoreply == "j") {
  config.autoreply == "true"
  fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
} else if (autoreply == "nein" || autoreply == "n") {
  config.autoreply == "false"
  fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
}


console.clear()
const maincb = readline.question(gradient.passion("Möchtest du einen Main CB setzen? (Der Bot Verbindet sich dann jedes mal mit dem Eingestelltem CB.) Ja/Nein: "))
if (maincb == "ja" || maincb == "j") {
  const setmaincb = readline.question(gradient.instagram("Und wie lautet dieser?: "))
  if (
    setmaincb === "cb1" ||
    setmaincb === "cb2" ||
    setmaincb === "cb3" ||
    setmaincb === "cb4" ||
    setmaincb === "cb5" ||
    setmaincb === "cb6" ||
    setmaincb === "cb7" ||
    setmaincb === "cb8" ||
    setmaincb === "cb9" ||
    setmaincb === "cb10" ||
    setmaincb === "cb11" ||
    setmaincb === "cb12" ||
    setmaincb === "cb13" ||
    setmaincb === "cb14" ||
    setmaincb === "cb15" ||
    setmaincb === "cb16" ||
    setmaincb === "cb17" ||
    setmaincb === "cb18" ||
    setmaincb === "cb19" ||
    setmaincb === "cb20" ||
    setmaincb === "cb21" ||
    setmaincb === "cb22" ||
    setmaincb === "evil" ||
    setmaincb === "nature" ||
    setmaincb === "extreme"
) {
    config.maincb = setmaincb;
    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
} else {
    console.log(gradient.fruit("Dies ist kein existierender CB! Hier einige Beispiele: cb7, evil, nature, extreme, cb22"));
    process.exit(1);
}


} else if (maincb == "nein" || "n") {
config.maincb = "false"
fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
}
if (config.maincb == "false") {
  console.clear()
  const whichcbconnect = readline.question(gradient.passion("Zu welchem CB möchtest du dich Verbinden?: "))
  if (
    whichcbconnect === "cb1" ||
    whichcbconnect === "cb2" ||
    whichcbconnect === "cb3" ||
    whichcbconnect === "cb4" ||
    whichcbconnect === "cb5" ||
    whichcbconnect === "cb6" ||
    whichcbconnect === "cb7" ||
    whichcbconnect === "cb8" ||
    whichcbconnect === "cb9" ||
    whichcbconnect === "cb10" ||
    whichcbconnect === "cb11" ||
    whichcbconnect === "cb12" ||
    whichcbconnect === "cb13" ||
    whichcbconnect === "cb14" ||
    whichcbconnect === "cb15" ||
    whichcbconnect === "cb16" ||
    whichcbconnect === "cb17" ||
    whichcbconnect === "cb18" ||
    whichcbconnect === "cb19" ||
    whichcbconnect === "cb20" ||
    whichcbconnect === "cb21" ||
    whichcbconnect === "cb22" ||
    whichcbconnect === "evil" ||
    whichcbconnect === "nature" ||
    whichcbconnect === "extreme"
) {
  config.connecttocb = whichcbconnect
  fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
}
} else {
  console.log(gradient.fruit("Dies ist kein existierender CB! Hier einige Beispiele: cb7, evil, nature, extreme, cb22"));
  process.exit(1)
}
const discordlog = readline.question(gradient.passion("Ok. Möchtest du nun das ganze auf Discord haben? (Wer dir geschrieben hat und was/wann) Ja/Nein: "))
if (discordlog == "ja" || discordlog == "j") {
  config.discordnotify = "true"
  fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
  const webhook = readline.question(gradient.passion("Gib deine Webhook hier ein: "))
  config.webhook = webhook
  fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
  const logchat = rl.question(gradient.passion("Möchtest du ALLE Nachrichten in der Webhook (1) oder nur MSG's und Moneydrops? (2) (1/2)"))
  if (logchat = "1") {
    config.logallmsgs = "true"
    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
  } else if (logchat = "2") {
    config.logallmsgs = "false"
    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
  }
} 
console.clear()
console.log(gradient.instagram("Du hast es geschafft! Du kannst nun den Bot starten!"))
}

const mainmenu = readline.question(gradient.morning("Du bist nun im Hauptmenü! Bitte beachte, dass dieses Skript KEIN Verkaufsbot ist, sondern nur ein AFK Bot! Also falls du deinen Bot verlinkt haben, ändere es zu den gewünschten Account. Mögliche Commands: settings, start -> "))

let bot

function createBot() {
  const bot = mineflayer.createBot({
    host: "griefergames.net",
    username: config.gmailaccount,
    auth: "microsoft",
    version: "1.8.9",
    autoJump: false,
  });
  bot.loadPlugin(pathfinder)
  bot.once('spawn', () => {
    const portalCoordinates = portals[config.connecttocb];
    console.log(gradient.rainbow('Der Bot ist erfolgreich eingeloggt auf GrieferGames!'));
    bot.chat("/portal");
    console.log(gradient.mind('Der Bot ist im Portalraum und wartet 15 Sekunden...'));
    setTimeout(() => {
      console.log(gradient.summer('Der Bot ist auf dem Weg zum Portal!'));
      const defaultMove = new Movements(bot);
      for (const coords of portalCoordinates) {
        bot.pathfinder.setMovements(defaultMove);
        bot.pathfinder.setGoal(
          new GoalBlock(coords[0], coords[1], coords[2])
        );
      }
    }, 15000);
  });



bot.on("message", (message) => {
  try {
      let msg = message.toString();

      if (
          msg === "§2§l[Switcher] Lade Daten herunter!" ||
          msg === "[Switcher] Lade Daten herunter!"
      ) {
        console.log(gradient.rainbow('Der Bot ist erfolgreich auf dem CB! Ab jetzt gelten deine Einstellungen und dein Bot steht auf deinem GS'));
        setTimeout(() => {
          bot.chat("/p h")
          if (config.nicknameactive == "true") {
            if (config.nickname == "standart") {
          bot.chat("/nick AFK_griefer")}
        else bot.chat("/nick " + config.nickname)}
        }, 4000);
      }
  } catch (error) {
      console.error("Fehler beim Verarbeiten der Nachricht! Bitte melde dies sofort! Error:", error);
  }


  if (
    message.toString().includes("GrieferGames") ||
    message.toString().includes("MysteryMod") ||
    message.toString().includes("Mobremover") ||
    message.toString().includes("Itemremover")
  ) {
    return;
  }
  if (config.discordnotify === "true" && config.webhook) {
  if (config.logallmsgs == "true") {
    const chatlog = `${message}`;
    sendToWebhook(chatlog);
  } else if (config.logallmsgs == "false") {
    if (message.toString().includes("-> mir")) {
      const chatlog = `[MSG] ${message}`;
      sendToWebhook(chatlog);
      bot.chat("/r " + config.replymessage)
    } else if (message.toString().includes("hat dir $")) {
      const chatlog = `[MONEYDROP] ${message}`;
      sendToWebhook(chatlog);
    } else {
      return;
    }
  } }
  
  
})}
  

if (mainmenu == "start") {
  console.clear()
  createBot();
}
