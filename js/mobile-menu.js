const btnOpenMenu = document.querySelector('.menu-mobile-profile-pic');
const overlay = document.querySelector('.overlay');
mobileMenu = document.querySelector('.left-menu');
toggleMenu = false;

btnOpenMenu.addEventListener("click",clickMenu) 
overlay.addEventListener("click",clickMenu) 
   
function clickMenu () {
   if (toggleMenu == false) {
      toggleMenu = true;
      mobileMenu.classList.remove("closed");
      overlay.style.display = "flex";
      mobileMenu.classList.add("open");
      overlay.classList.add("show")
   } else {
      toggleMenu = false;
      mobileMenu.classList.remove("open");
      mobileMenu.classList.add("closed");
      overlay.classList.remove("show")
      setTimeout(function() {
         overlay.style.display = "none";
      }, 300);
   }
   
   return toggleMenu;
}