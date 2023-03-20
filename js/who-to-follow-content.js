const suggestionContent = document.querySelector('.suggestion-content');

const fetchUsers = async () => {

   const userData = await fetch(`https://raw.githubusercontent.com/luiz-developer/twitter-clone-project/main/js/users-suggestion.json`);
   const userJson = await userData.json();

   for (var i = 0; i < userJson.length; i++) {
      
      var reformerName;
      var reformerUsername;
      
      if (userJson[i].name.length > 15) {
         reformerName = await userJson[i].name.slice(0, 12) + "...";
      } else {
         reformerName = userJson[i].name;
      }
      
      if (userJson[i].username.length > 14) {
         reformerUsername = await userJson[i].username.slice(0, 14) + "...";
      } else {
         reformerUsername = userJson[i].username;
      }
      
      suggestionContent.innerHTML += `
      <div class="profile profile-${i}">
         <div class="all-infors">
            <img src="https://avatars.githubusercontent.com/u/${userJson[i].githubId}?s=60&v=4" class="sugg-profile-picture" alt="">
               <div class="sugg-profile-infors">
               <a href="https://github.com/${userJson[i].username}">
                     <div class="sugg-name">
                        <span>${reformerName}</span>
                     </div>
                     <div class="sugg-username">
                        <span>@${reformerUsername}</span>
                     </div>
                  </a>
               </div>
            </div>
         <button class="follow-btn ${userJson[i].following}">Follow</button>
      </div>`
   }
   console.log(userJson);
}

fetchUsers();