const suggestionContent = document.querySelector('.suggestion-content');

const fetchUsers = async () => {

   const userData = await fetch(`https://raw.githubusercontent.com/luiz-developer/twitter-clone-project/main/js/users-suggestion.json`);
   const userJson = await userData.json();

   for (var i = 0; i < userJson.length; i++) {
      
      if (userJson[i].name.length > 15) {
         var reformerName = await userJson[i].name.slice(0, 12) + "...";
      } else {
         var reformerName = userJson[i].name;
      }
      
      if (userJson[i].username.length > 14) {
         var reformerUsername = await userJson[i].username.slice(0, 14) + "...";
      } else {
         var reformerUsername = userJson[i].username;
      }
      
      suggestionContent.innerHTML += `
      <div class="profile profile-${i}">
         <div class="all-infors">
            <img src="https://avatars.githubusercontent.com/u/${userJson[i].githubId}?s=60&v=4" class="sugg-profile-picture" alt="">
               <div class="sugg-profile-infors">
                  <div class="sugg-name">
                     <span>${reformerName}</span>
                  </div>
                  <div class="sugg-username">
                     <span>@${reformerUsername}</span>
                  </div>
               </div>
            </div>
         <button class="follow-btn ${userJson[i].following}">Follow</button>
      </div>`
   }
   console.log(userJson);
}

fetchUsers();
