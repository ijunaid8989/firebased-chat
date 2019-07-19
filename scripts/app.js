const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMsg = document.querySelector(".update-msg");

newChatForm.addEventListener("submit", e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err))

});

newNameForm.addEventListener("submit", e => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  newNameForm.reset();
  updateMsg.innerHTML = `Your name was updated to ${newName}`;
  setTimeout(() => updateMsg.innerHTML = "", 3000);
});

const username = localStorage.username ? localStorage.username : "anon"

const chatUI = new ChatUI(chatList)

const chatroom = new Chatroom("general", username);

chatroom.getChats(data => chatUI.render(data));
