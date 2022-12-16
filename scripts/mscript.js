money = 0;
moneyup = 1;
msec = 0;
upcost = 15;
catcost = 25;
workercost = 250;
upown = 0;
catown = 0;
workerown = 0;
catadd = 1;
workadd = 15;
cboost = 1;
wboost = 1;
catmax = 0;
workmax = 0;
level = 0
const levelTexts=[
    "Soil", //0
    "Potato Seed", //1
    "Cartoon Potato?", //2
    "Potato", //3
    "Potato Gang", //4
    "Strongman Potato", //5
    "Potato Boss", //6
    "...?", //7
    "Awakened Potato Boss", //8
    "Ilma's Potato?", //9
]
const upgrades=[
    "https://i.imgur.com/NTrBlLy.png", // soil
    "https://i.imgur.com/PYnJSej.png", // seed
    "https://i.imgur.com/CLiv6JV.png", // cartoon potato
    "https://i.imgur.com/ZxIroPD.png", // real potato
    "https://i.imgur.com/0rgcya4.png", // potato gang
    "https://i.imgur.com/DX9oWlX.png", // buff potato
    "https://i.imgur.com/Bt9hKbT.png", // potato mob boss
    "https://i.imgur.com/ezcpJjO.jpg", // nesto misteriozno se pojavi...
    "https://i.imgur.com/GE5W78L.png", // awakened mob boss
    "https://i.imgur.com/CN48ufy.png", // final potato
];

//save pre exit
function closingCode() {
  if (confirm("You have closed the window, would you like to save?") === true) {
    save();
    return null;
  }
}

function addcomma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
// kul update
function reloadall() {
  document.getElementById("click").innerHTML =
    "LB/click: " + addcomma(moneyup) + " | LB/sec: " + addcomma(msec);
  document.getElementById("total").innerHTML = "LB: " + addcomma(money);
  document.getElementById("servant_farmer").innerHTML =
    catown + "-servant farmer: " + addcomma(catcost) + " | +" + addcomma(catadd) + "/sec";
  document.getElementById("worker").innerHTML =
    workerown + "-worker: " + addcomma(workercost) + " | +" + addcomma(workadd) + "/sec";
  document.getElementById("upgrade").innerHTML =
    addcomma(upown) + "-main upgrade: " + addcomma(upcost);
}
// over write kurrent save file 
function save() {
  localStorage.setItem("money", money);
  localStorage.setItem("moneyup", moneyup);
  localStorage.setItem("msec", msec);
  localStorage.setItem("upcost", upcost);
  localStorage.setItem("catcost", catcost);
  localStorage.setItem("catadd", catadd);
  localStorage.setItem("workercost", workercost);
  localStorage.setItem("workadd", workadd);
  localStorage.setItem("catown", catown);
  localStorage.setItem("workerown", workerown);
  localStorage.setItem("upown", upown);
  localStorage.setItem("catadd", catadd);
  localStorage.setItem("workadd", workadd);
  localStorage.setItem("cboost", cboost);
  localStorage.setItem("wboost", wboost);
  localStorage.setItem("catmax", catmax);
  localStorage.setItem("workmax", workmax);
}
// load stari save file koji je na local storage
function load() {
  money = parseInt(localStorage.getItem("money"));
  moneyup = parseInt(localStorage.getItem("moneyup"));
  msec = parseInt(localStorage.getItem("msec"));
  upcost = parseInt(localStorage.getItem("upcost"));
  catcost = parseInt(localStorage.getItem("catcost"));
  upown = parseInt(localStorage.getItem("catadd"));
  workercost = parseInt(localStorage.getItem("workercost"));
  upown = parseInt(localStorage.getItem("workadd"));
  catown = parseInt(localStorage.getItem("catown"));
  workerown = parseInt(localStorage.getItem("workerown"));
  upown = parseInt(localStorage.getItem("upown"));
  catadd = parseInt(localStorage.getItem("catadd"));
  workadd = parseInt(localStorage.getItem("workadd"));
  cboost = parseInt(localStorage.getItem("cboost"));
  wboost = parseInt(localStorage.getItem("wboost"));
  catmax = parseInt(localStorage.getItem("catmax"));
  workmax = parseInt(localStorage.getItem("workmax"));

  reloadall();
}
// reset sve valueueue
function reset() {
  if (confirm("da li ste siguran gospodine?") === true) {
    money = 0;
    moneyup = 1;
    msec = 0;
    upcost = 15;
    catcost = 25;
    workercost = 250;
    catown = 0;
    workerown = 0;
    upown = 0;
    catadd = 1;
    workadd = 15;
    reloadall();
  }
}
levelRequirement=100;
//timer
function myTimer() {
    money += msec;
    if (money>=levelRequirement) {
        level++;  
        levelRequirement=Math.round(levelRequirement*1.35);
        document.getElementById("potatoneeded").innerHTML="Next Level: " + levelRequirement;
    }
  document.getElementById("total").innerHTML = "Potatoes: " + addcomma(money);
  document.getElementById("onpotato").innerHTML="Current Level: " +  levelTexts[level];
  document.getElementById("round").src=upgrades[level];
}
setInterval(myTimer, 1000);

// sta se desi kada klik bam bam
function clicked() {
  money += moneyup;
  if (money>=levelRequirement) {
    level++;  
    levelRequirement=Math.round(levelRequirement*2.5);
    
    if (level==7){
        document.body.style.backgroundColor="black"; 
    } else { document.body.style.backgroundColor="white";}
    if (level>=9){
        levelRequirement="9999999999999999999";
        alert("idi ilmin site za continuation");
    }
    document.getElementById("potatoneeded").innerHTML="Next Level: " + levelRequirement;
}
  document.getElementById("total").innerHTML = "Potatoes: " + addcomma(money);
  document.getElementById("onpotato").innerHTML="Current Level: " +  levelTexts[level];
  document.getElementById("round").src=upgrades[level];
}
//upgrade fmnkcitjgiaj funkcija
function upgrade(name) {
  if (name == "servant_farmer") {
    if (money >= catcost && catown < 50) {
      
      if (catown <= 13) {
        msec += catadd;
        catadd++;
        cboost = 1;
      } else if (catown == 14) {
        msec += catadd;
        catadd++;
        cboost = 200;
      } else if (catown <= 23) {
        msec += 200 * catadd;
        catadd++;
        cboost = 200;
      } else if (catown == 24) {
        msec += 200 * catadd;
        catadd++;
        cboost = 5000;
      } else if (catown <= 48) {
        msec += 5000 * catadd;
        catadd++;
        cboost = 5000;
      } else if (catown == 49) {
        msec += 5000 * catadd;
        catadd++;
        cboost = 15000;
      } else {
        msec += 15000 * catadd;
        catadd++;
        cboost = 15000;
      }
      catown += 1;
      money -= catcost;
      catcost = catcost * 2;
      document.getElementById("servant_farmer").innerHTML =
        catown + "-servant farmer: " + addcomma(catcost) + " | +" + addcomma(catadd * cboost) + "/sec";
    } else if (catown == 5) {
      document.getElementById("servant_farmer").innerHTML =
        catown + "-servant farmer: MAX | +15% click/sec";
    }
  }

  if (name == "worker") {
    if (money >= workercost && workerown < 50) {
      
      if (workerown <= 13) {
        msec += workadd;
        workadd++;
        wboost = 1;
      } else if (workerown == 14) {
        msec += workadd;
        workadd++;
        wboost = 200;
      } else if (workerown <= 23) {
        msec += 200 * workadd;
        workadd++;
        wboost = 200;
      } else if (workerown == 24) {
        msec += 200 * workadd;
        workadd++;
        wboost = 5000;
      } else if (workerown <= 48) {
        msec += 5000 * workadd;
        workadd++;
        wboost = 5000;
      } else if (workerown == 49) {
        msec += 5000 * workadd;
        workadd++;
        wboost = 15000;
      } else {
        msec += 15000 * workadd;
        workadd++;
        wboost = 15000;
      }
      workerown += 1;
      money -= workercost;
      workercost = workercost * 3;
      document.getElementById("worker").innerHTML = 
        workerown + "-worker: " + addcomma(workercost) + " | +" + addcomma(workadd * wboost) + "/sec";
    } else if (workerown == 5) {
      document.getElementById("worker").innerHTML =
        workerown + "-high class servant: MAX | +35% click/sec";
    }
  }

  if (name == "upgrade") {
    if (money >= upcost) {
      moneyup += upcost / 15;
      money -= upcost;
      upown += 1;
      upcost = upcost * 5;
      document.getElementById("upgrade").innerHTML =
        addcomma(upown) + "-extra potato: " + addcomma(upcost);
      if (catown == 50) {
        msec -= catmax;
        catmax = Math.floor(moneyup * 0.15);
        msec += catmax;
      }
      if (workerown == 50) {
        msec -= workmax;
        workmax = Math.floor(moneyup * 0.35);
        msec += workmax;
      }
    }
  }

  document.getElementById("click").innerHTML =
    "Potatoes/click: " + addcomma(moneyup) + " | Potatoes/sec: " + addcomma(msec);
  document.getElementById("total").innerHTML = "Potatoes: " + addcomma(money);
}
