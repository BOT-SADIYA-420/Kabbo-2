module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61575186396693","61558451764164","61550529403710") {
    var aid = ["","61575186396693","61575186396693"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _kabbo বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার বস kabbo এর সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "👉আমার বস ♻️ kabbo এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/profile.php?id=61575186396693🔰                                        ♪√বস ফ্রি হলে আসবে🧡😁😜🐒","বস kabbo কে এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒","বস kabbo কে Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","👉আমার বস♻️ 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/profile.php?id=61550529403710🔰 ♪√বস ফ্রি হলে আসবে🧡😁😜🐒","ফারহান বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","ফারহান বস কে এতো মেনশন নাহ দিয়া বস কে একটা জি এফ দে 😒 😏","Mantion_না দিয়ে বস ফারহান এর সাথে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","বস ফারহান কে মেনশন দিসনা পারলে একটা জি এফ দে","বাল পাকনা Mantion_দিস না বস ফারহান প্রচুর বিজি আছে 🥵🥀🤐","চুমু খাওয়ার বয়স টা আমার বস ফারহান চকলেট🍫খেয়ে উড়িয়ে দিল 🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
