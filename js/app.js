var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById ('nav');

btnMenu.addEventListener('click',function(){nav.classList.toggle('mostrar');
})

var menuLinks = document.querySelectorAll('.menu a[href^="#"]')
menuLinks.foreach (menuLink =>{
    menuLink.addEventListener("click", function(){
        menuLink.classList.remove("menu_opened");
    })
})