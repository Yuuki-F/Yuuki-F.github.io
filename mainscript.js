/*function addVisited(dis)
{
    var elements = document.getElementsByClassName("active");
    if(dis.className=='active') {
        dis.className='';
    }else{
        dis.className='active';
    }
}
*/
function clickFn(evt) {
    const clickedElement = evt.target;
  
    if (!clickedElement.matches('.topnav a')) {
      return;
    }
  
    document.querySelector(".active").classList.remove("active");
    clickedElement.classList.add("active");
  }
  
  const topnav = document.querySelector(".topnav");
  
  topnav.addEventListener("click", clickFn);