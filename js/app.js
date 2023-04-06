//var or elements
const tweetTextArea = document.querySelector(".tweet-textarea");
const caracterInfor = document.querySelector(".caracter-infor");

//when somebody to click, activate the function 
tweetTextArea.addEventListener("input", () => {
   tweetTextArea.style.height = "auto";
   caracterInfor.innerText = `${tweetTextArea.value.length}/280`;
   tweetTextArea.style.height = `${tweetTextArea.scrollHeight}px`;
});

alert(
   "Hello, this site is under development. Don't be alarmed if something doesn't work."
);
