var randomWords = require("random-words");

export default async function handler(req, res) {
  if (req.method === "GET") {
    statusCode = 400;

    while (statusCode != 200) {
    
      var word = randomWords();
      var url = `https://${word}.vercel.app`;
      var response = await fetch(url);
      var statusCode = response.status;
      console.log(`word: ${word} statusCode: ${statusCode}`);
    }

    return res.json({
      url,
    });
  }

  return res.send("Method not allowed.");
}
