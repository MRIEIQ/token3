const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const myid = ['521783741576642560'];
const prefix = ['!'];
var adminprefix = "!";


client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : ALSHY5 `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});

client3.on('ready', () => {
  console.log(`----------------`);
  console.log(`3 Account Online ✩' `);
  console.log(`----------------`);
});

const developers = ["521783741576642560", "303754301946462208"];
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!developers.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + "setg")) {
    client.user.setGame(argresult);
    message.channel.send(`**✅   ${argresult}**`);
  } else if (message.content === adminprefix + "leave") {
    message.guild.leave();
  } else if (message.content.startsWith(adminprefix + "setw")) {
    client.user.setActivity(argresult, { type: "WATCHING" });
    message.channel.send(`**✅   ${argresult}**`);
  } else if (message.content.startsWith(adminprefix + "setl")) {
    client.user.setActivity(argresult, { type: "LISTENING" });
    message.channel.send(`**✅   ${argresult}**`);
  } else if (message.content.startsWith(adminprefix + "sets")) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅**`);
  }
  if (message.content.startsWith(adminprefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.send(`Changing The Name To ..**${argresult}** `);
  } else if (message.content.startsWith(adminprefix + "setava")) {
    client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
  }
});


client.on("message", message => {
  if (message.content.startsWith("!bc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(" ");
    message.guild.members
      .filter(m => m.presence.status !== "all")
      .forEach(m => {
        m.send(`${argresult}\n ${m}`);
      });
    message.channel.send(
      `\`${
        message.guild.members.filter(m => m.presence.status !== "all").size
      }\`:mailbox:  عدد المستلمين `
    );
    message.delete();
  }
});



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.ALSHY5');
if (!rank) return message.reply('https://discord.gg/bFWudm9')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.ALSHY5');
if (!rank) return message.reply('https://discord.gg/bFWudm9')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.ALSHY5');
if (!rank) return message.reply('https://discord.gg/bFWudm9')
  message.channel.send(args.join("  "))
    message.delete();
  }
});



client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
