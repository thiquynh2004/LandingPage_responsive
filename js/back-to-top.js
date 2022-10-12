
const changeBackgroundNav = document.querySelector('.navbar');

window.onscroll = function() {scrollFunction()};
function scrollFunction() {    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {        
        document.getElementById("back-to-top").style.display = "block";
        changeBackgroundNav.classList.add('changNavbar');
    } else {         
        document.getElementById("back-to-top").style.display = "none";
        changeBackgroundNav.classList.remove('changNavbar');
    }
}
document.getElementById('back-to-top').addEventListener("click", function(){   
    window.scrollTo({ top: 0, behavior: 'smooth' });
});