const API_URL = "https://api.blackbox.ai/chat/completions";
const API_KEY = "sk-wHgZgKSfO9QzBP6HUwVdDg"; // ganti dengan API key kamu

async function askBlackbox() {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "blackboxai/openai/gpt-4o",
        messages: [
          { role: "user", content: "Hello Blackbox AI" }
        ]
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

askBlackbox();
