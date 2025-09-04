<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CinematiQ</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Great+Vibes&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background: #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
      color: #fff;
    }

    .landing-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;
    }

    .description-text {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      max-width: 600px;
      line-height: 1.5;
    }

    .created-by {
      font-size: 16px;
      color: #ccc;
    }

    .ask-me-button {
      background: linear-gradient(to right, #FF8C00, #FF4500);
      color: #fff;
      border: none;
      padding: 15px 30px;
      border-radius: 50px;
      cursor: pointer;
      font-weight: bold;
      font-size: 18px;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 4px 15px rgba(255, 140, 0, 0.4);
    }

    .ask-me-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(255, 140, 0, 0.6);
    }

    .welcome-text {
      position: fixed;
      top: 30px;
      left: 30px;
      font-family: 'Arial';
      font-size: 70px;
      font-weight: normal;
      color: #FF8C00;
      z-index: 1000;
    }

    .bottom-info {
        position: fixed;
        bottom: 20px;
        width: 100%;
        text-align: center;
        z-index: 1000;
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    
    .copyright {
        font-size: 12px;
        color: #fff;
    }
    
    .created-by-bottom {
        font-size: 12px;
        color: #aaa;
    }

    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1001;
      animation: fadeInOverlay 0.3s ease-out;
    }

    .modal-backdrop.visible {
      display: flex;
    }

    .chat-container {
      width: 420px;
      max-width: 95vw;
      height: 650px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 24px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.25);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .chat-header {
      background: linear-gradient(to right, #FF8C00, #FF4500);
      color: #fff;
      padding: 20px;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      position: relative;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 20px;
      background: none;
      border: none;
      font-size: 30px;
      color: #fff;
      cursor: pointer;
      line-height: 1;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    .close-button:hover {
      opacity: 1;
    }

    .chat-messages {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .message {
      max-width: 80%;
      padding: 14px 18px;
      border-radius: 20px;
      line-height: 1.5;
      animation: fadeIn 0.4s ease-out;
      word-wrap: break-word;
      box-shadow: 0 4px 8px rgba(0,0,0,0.08);
    }

    .user-message {
      align-self: flex-end;
      background: #FF8C00;
      color: #fff;
      border-bottom-right-radius: 8px;
    }

    .bot-message {
      align-self: flex-start;
      background: #e0e0f0;
      color: #333;
      border-bottom-left-radius: 8px;
    }
    
    .loading-dots::after {
      content: ' .';
      animation: dots 1s steps(3, end) infinite;
    }

    @keyframes dots {
      0%, 20% { content: '.'; }
      40% { content: '..'; }
      60% { content: '...'; }
      80%, 100% { content: ' '; }
    }

    .chat-input {
      display: flex;
      border-top: 1px solid #ddd;
    }

    .chat-input input {
      flex: 1;
      border: none;
      padding: 18px;
      font-size: 16px;
      outline: none;
      background: transparent;
    }

    .chat-input button {
      background: linear-gradient(to right, #FF8C00, #FF4500);
      color: #fff;
      border: none;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      cursor: pointer;
      font-weight: bold;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease-in-out;
      transform: scale(0.9);
    }

    .chat-input button:hover {
      filter: brightness(1.2);
      transform: scale(1.0);
      box-shadow: 0 0 10px rgba(255, 140, 0, 0.5);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInOverlay {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>
</head>
<body>
  <div class="welcome-text">CinematiQ</div>

  <div class="landing-page">
    <p class="description-text">Welcome to dynamic Movie Chatbot, powered by n8n, OMDb, and Gemini!
Click the "Ask Me" button and get real-time movie details, ratings, summaries, and even top picks by genre — from Comedy and Thriller to Adventure, Sci-Fi, and more.</p>
    <button class="ask-me-button" id="askMeButton">Ask me</button>
  </div>
  
  <div class="bottom-info">
      <div class="copyright">© All rights reserved</div>
      <div class="created-by-bottom">Created by NIRANJAN M</div>
  </div>

  <div class="modal-backdrop" id="chatModal">
    <div class="chat-container">
      <div class="chat-header">
        Chat with me!
        <button class="close-button" id="closeButton">&times;</button>
      </div>
      <div class="chat-messages" id="chatMessages"></div>
      <div class="chat-input">
        <input type="text" id="userInput" placeholder="Search by movie title or genre..." />
        <button onclick="sendMessage()">&#10140;</button>
      </div>
    </div>
  </div>

  <script>
    const messagesContainer = document.getElementById("chatMessages");
    const userInput = document.getElementById("userInput");
    const chatModal = document.getElementById("chatModal");
    const askMeButton = document.getElementById("askMeButton");
    const closeButton = document.getElementById("closeButton");
    function showModal() {
      chatModal.classList.add('visible');
    }

    function hideModal() {
      chatModal.classList.remove('visible');
    }

    askMeButton.addEventListener('click', showModal);
    closeButton.addEventListener('click', hideModal);

function addMessage(text, sender = "bot", isTyping = false, poster = null) {
  const msg = document.createElement("div");
  msg.classList.add("message");
  msg.classList.add(sender === "user" ? "user-message" : "bot-message");

  if (isTyping) {
    msg.classList.add("loading-dots");
    msg.innerText = text;
  } else {
    if (poster) {
      // Show poster image first
      const img = document.createElement("img");
      img.src = poster;
      img.alt = "Movie Poster";
      img.style.maxWidth = "200px";
      img.style.borderRadius = "10px";
      img.style.marginBottom = "10px";
      msg.appendChild(img);
    }

    // Then show text details
    const textNode = document.createElement("div");
    textNode.innerText = text;
    msg.appendChild(textNode);
  }

  messagesContainer.appendChild(msg);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  return msg;
}

    async function sendMessage() {
      const text = userInput.value.trim();
      if (!text) return;

      // Show user message
      addMessage(text, "user");
      userInput.value = "";
      
      const prompt = `Find and summarize the key details of the movie titled "${text}". The summary should include the movie's genre, release date, director, main cast, and a brief plot synopsis. The response should be concise, professional, and directly answer the user's query.`;

      // Show temporary bot "typing..."
      const typingMsg = addMessage("Fetching info", "bot", true);

      try {
        const payload = {
          contents: [{ parts: [{ text: prompt }] }],
          tools: [{ "google_search": {} }],
          systemInstruction: {
            parts: [{ text: "You are a world-class movie information bot. Provide a concise, single-paragraph summary of movie details." }]
          },
        };

        const response = await fetch("http://localhost:5678/webhook-test/moviebot", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ movie: text })
        });

      const result = await response.json();
typingMsg.remove();

if (result && result.reply) {
  addMessage(result.reply, "bot", false, result.poster);
} else {
  addMessage("Sorry, I couldn’t find information for that movie.", "bot");
}
} catch (err) {
typingMsg.remove();
addMessage("⚠️ Error connecting to the server.", "bot");
console.error(err);
}
}
    // Allow pressing Enter to send
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });

    // Initial welcome message
    addMessage("Hey there! 🎥 Drop any movie name for instant details, or share a genre like Horror, Action, Thriller, Comedy, Mystery, Adventure, etc. and I’ll bring you the top picks!");
  </script>
</body>
</html>
