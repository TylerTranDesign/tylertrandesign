const hamburgerMenu = document.getElementById('hamburger-menu');
const links = document.getElementById('navbar-links');
const header = document.getElementById('header');

document.onclick = function(e){
    if (e.target.id !== 'header' && e.target.id !== 'navbar-links' && e.target.id !== 'hamburger-menu'){
        hamburgerMenu.classList.remove('active');
        links.classList.remove('active');
    }
}

hamburgerMenu.onclick = function(){
    hamburgerMenu.classList.toggle('active');
    links.classList.toggle('active');
}