//var or elements
const tweetTextArea = document.querySelector(".tweet-textarea");
const caracterInfor = document.querySelector(".caracter-infor");
const userProfilePicture = document.querySelector(".user-profile-picture");
const tweetProfilePictureImage = document.querySelector(".tweet-profile-picture");

//when somebody to click, activate the function 
tweetTextArea.addEventListener("input", () => {
   tweetTextArea.style.height = "auto";
   caracterInfor.innerText = `${tweetTextArea.value.length}/280`;
   tweetTextArea.style.height = `${tweetTextArea.scrollHeight}px`;
});

function cum() {
   const profileImg = new Image();
   profileImg.src = userProfilePicture.value;
   profileImg.onload = function() {
      //console.log(this.height);
      tweetProfilePictureImage.src = userProfilePicture.value;
   };
   profileImg.onerror = function() { 
      tweetProfilePictureImage.src = 'img/defalt-avatar.png'; 
   };
};