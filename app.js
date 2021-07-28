'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark Theme";
    }
    else {
        this.textContent = "Light Theme";
    }

});
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
async function writeDocument() {
    while(true) {
        await sleep(500);
        document.getElementById('cR').innerHTML = makeid(getRandomInt(55));
        document.getElementById('cR2').innerHTML = makeid(getRandomInt(55));
        document.getElementById('cR3').innerHTML = makeid(getRandomInt(55));
        document.getElementById('cR4').innerHTML = makeid(getRandomInt(55));
    /*    document.write("aEIOU") */
    }
}
writeDocument();