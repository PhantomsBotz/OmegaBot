function staffCheck(userid) {
  let staff;
  
 if(bot.guilds.get("612404705376600072").members.get(userid).roles.has("678406046930173952")) {
  staff = true
 } else {
  staff = false
 }
}
