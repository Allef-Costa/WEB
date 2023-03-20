const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0)
});

let menu = document.querySelector('#navbar-icon');
Let navlist = document.querySelector('.navbar-header');
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}