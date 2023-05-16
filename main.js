document.addEventListener("DOMContentLoaded", function() {
    var chatInput = document.getElementById("chatInput");
    var chatlogs = document.getElementById("chatlogs");
  
    chatInput.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
        var userMessage = this.value;
        appendMessage("You: " + userMessage);
  
        // Handle user input and get bot's response
        getBotResponse(userMessage);
  
        this.value = "";
      }
    });
  
    function getBotResponse(message) {
      // Make an AJAX request to a PHP file that handles the bot's logic
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          var botResponse = xhr.responseText;
          appendMessage("Bot: " + botResponse);
        }
      };
      xhr.open("POST", "bot.php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send("message=" + message);
    }
  
    function appendMessage(message) {
      var chatMessage = document.createElement("div");
      chatMessage.innerHTML = message;
      chatlogs.appendChild(chatMessage);
    }
  });
  