const suggestionContent = document.querySelector(".suggestion-content");

const fetchUsers = async () => {
   const userData = await fetch(
      `https://raw.githubusercontent.com/luiz-developer/twitter-clone-project/main/js/json/users-suggestion.json`
   );
   const userJson = await userData.json();

   for (var i = 0; i < userJson.length; i++) {
      var reformerName;
      var reformerUsername;

      if (userJson[i].name.length > 14) {
         reformerName = (await userJson[i].name.slice(0, 14)) + "...";
      } else {
         reformerName = userJson[i].name;
      }

      if (userJson[i].username.length > 14) {
         reformerUsername = (await userJson[i].username.slice(0, 14)) + "...";
      } else {
         reformerUsername = userJson[i].username;
      }

      suggestionContent.innerHTML += `
      <div class="profile profile-${i}">
         <div class="all-infors">
            <a href="https://github.com/${userJson[i].username}">
               <img src="https://avatars.githubusercontent.com/u/${userJson[i].githubId}?s=100&v=4" class="sugg-profile-picture" alt="">
            </a>
            <div class="sugg-profile-infors">
               <div class="sugg-name">
                  <a href="https://github.com/${userJson[i].username}">
                     <span>${reformerName}</span>
                  </a>
               </div>
               <div class="sugg-username">
                  <a href="https://github.com/${userJson[i].username}">
                     <span>@${reformerUsername}</span>
                  </a>
               </div>
            </div>
         </div>
         <button class="follow-btn ${userJson[i].following}">${userJson[i].following}</button>
      </div>`;
   }
   console.log(userJson);
};

fetchUsers();
