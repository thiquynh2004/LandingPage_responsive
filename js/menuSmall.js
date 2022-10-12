var navbarlinkShow = document.getElementById('navbar');
var changeExpand = document.getElementById('chang-icon-expand');
function menuSmallShow(){    
    navbarlinkShow.classList.toggle('navbarHide');
    navbarlinkShow.classList.remove('icon-expand');
    changeExpand.classList.toggle('fa-xmark');
    changeExpand.classList.remove('icon-expand');

    
    
}