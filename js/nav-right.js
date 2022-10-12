var navright = document.getElementById('hide-navright');
var navrightS =document.getElementById('icon-navright');

function navrightHide(){      
  navright.style.transform  = "translateX(100px)"
  navright.style.opacity='0'
  navrightS.style.display='block'
  navrightS.style.opacity='1'
  
}
function navrightShow(){
  navright.style.transform  = "translateX(0)"
  navright.style.opacity='1'
  navright.style.display='block'
  navrightS.style.display='none'
  navrightS.style.opacity='0'
}