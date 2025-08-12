module.exports.config = {
  name: "autoreact",
  version: "1.0",
  author: "Loid Butter",
  cooldowns: 5,
  role: 0,
  shortDescription: "Auto reacts with emojis based on message letters",
  longDescription: "Reacts to messages with emojis based on letters in the message",
  category: "fun"
};

module.exports.alphabetEmotions = {
  a: ["😊", "😁", "🤗"],
  b: ["😎", "🤩", "😏"],
  c: ["😜", "😝", "🤪"],
  d: ["😠", "🤬", "😤"],
  e: ["😃", "😂", "🤣"],
  f: ["🥺", "😢", "😭"],
  g: ["😇", "😎", "😍"],
  h: ["🤔", "🧐", "😕"],
  i: ["😢", "😔", "😭"],
  j: ["😝", "😂", "😜"],
  k: ["😳", "🥺", "😬"],
  l: ["😂", "🤣", "😆"],
  m: ["😋", "🤩", "💋"],
  n: ["🤪", "😜", "😏"],
  o: ["🥳", "🎉", "😎"],
  p: ["🤩", "😲", "🤗"],
  q: ["😱", "😨", "🥶"],
  r: ["😤", "🤬", "😡"],
  s: ["😈", "👹", "👿"],
  t: ["🤗", "💖", "🫶"],
  u: ["😜", "😉", "💋"],
  v: ["🤐", "😶", "🤫"],
  w: ["😤", "💪", "🥇"],
  x: ["😑", "😬", "🙄"],
  y: ["🙃", "😜", "😝"],
  z: ["😶", "😐", "😌"]
};

module.exports.onStart = async function() {
  // Optional startup code if needed
};

module.exports.onChat = async function ({ event, api }) {
  try {
    const message = event.body.toLowerCase();
    for (const letter in module.exports.alphabetEmotions) {
      if (message.includes(letter)) {
        const emojis = module.exports.alphabetEmotions[letter];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        // GoatBotV2 এর setMessageReaction ফাংশন signature হচ্ছে: (reaction, messageID, threadID, callback)
        return api.setMessageReaction(randomEmoji, event.messageID, event.threadID, (err) => {
          if (err) console.error("Reaction error:", err);
        });
      }
    }
  } catch (error) {
    console.error("onChat error:", error);
  }
};
