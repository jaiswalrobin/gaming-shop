burger = document.querySelector(".burger")
header = document.querySelector("#header")
ul = document.querySelector(".ul_navbar")

burger.addEventListener('click',function(){
    header.classList.toggle('height-nav-resp');
    ul.classList.toggle('v-nav-resp');
})