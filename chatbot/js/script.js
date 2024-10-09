//sendMessage()

const chatBox = document.getElementById("chat-box");

const answers = {
    "hello " : "Hi! How're you doing?",
    "what's your name?" : "I'm an interactive bot made with JavaScript.",
    "bye" : "Goodbye, it was a pleasure.",
    "what can you do?" : "I can answer basic quesionts and help you with whatever you might need.",
    "default" : "Sorry, I don't understand that question, try again"
}

function sendMessage(){
    const userInput = document.getElementById("user-input").value.toLowerCase();
    if(userInput.trim()==="")return;

    appendMessage("You", userInput);
    const bootResponse = answers[userInput] || answers["default"];
    setTimeout(() => appendMessage("Bot", bootResponse), 500);
    document.getElementById("user-input").value="";
}

function appendMessage(sender, message){
    const messageElement = document.createElement("p");
    messageElement.textContent = `${sender}:${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function checkEnter(event){
    if(event.key === "Enter"){
        sendMessage()
    }
}