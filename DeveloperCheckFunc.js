const IDs = require("./config.json").ownerids
const Discord.js = require("Discord.js")

function Developers() {
let isDeveloper;
let UserID = message.author.id
if (IDs.includes(UserID)) {
    isDeveloper = true
  } else {
    isDeveloper = false
  }
}
