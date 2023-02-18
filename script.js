const FA = {name: "Faust",              type: "Unique",     value: 5,   pic:  "Images\\archive_faust.jpg"};
const MA = {name: "May",                type: "Balance",    value: 7,   pic:  "Images\\archive_may.jpg"};
const HC = {name: "Happy Chaos",        type: "Shooting",   value: 10,  pic:  "Images\\archive_happy_chaos.jpg"};
const CH = {name: "Chipp Zanuff",       type: "High Speed", value: 6,   pic:  "Images\\archive_chp.jpg"};
const BA = {name: "Baiken",             type: "Balance",    value: 3,   pic:  "Images\\archive_baiken.jpg"};
const ZA = {name: "Zato=1",             type: "Technical",  value: 4,   pic:  "Images\\archive_zat.jpg"};
const RA = {name: "Ramlethal Valentine",type: "Shooting",   value: 9,   pic:  "Images\\archive_ram-1.jpg"};
const NA = {name: "Nagoriyuki",         type: "One-Shot",   value: 8,   pic:  "Images\\archive_nag.jpg"};
const GD = {name: "Goldlewis Dickinson",type: "Power",      value: 4,   pic:  "Images\\archive_gold.jpg"};
const IN = {name: "I-no",               type: "Rush",       value: 5,   pic:  "Images\\archive_ino.jpg"};
const TE = {name: "Testament",          type: "Balance",    value: 6,   pic:  "Images\\icon-testament.jpg"};
const SI = {name: "Sin Kiske",          type: "Rush",       value: 1,   pic:  "Images\\icon-sin.jpg"};
const SO = {name: "Sol Badguy",         type: "Balance",    value: 3,   pic:  "Images\archive_sol.jpg"};
const KY = {name: "Ky Kiske",           type: "Balance",    value: 5,   pic:  "Images\archive_ky.jpg"};
const AX = {name: "Axl Low",            type: "Long Range", value: 2,   pic:  "Images\archive_axl.jpg"};
const PO = {name: "Potemkin",           type: "Power Throw",value: 4,   pic:  "Images\archive_pot.jpg"};
const MI = {name: "Millia Rage",        type: "High speed", value: 2,   pic:  "Images\archive_mll.jpg"};
const LE = {name: "Leo Whitefang",      type: "Balance",    value: 9,   pic:  "Images\archive_leo.jpg"};
const GI = {name: "Giovanna",           type: "Rush",       value: 7,   pic:  "Images\archive_gio.jpg"};
const AN = {name: "Anji Mito",          type: "Balance",    value: 5,   pic:  "Images\archive_anji.jpg"};
const JA = {name: "Jack-o'",            type: "Technical",  value: 5,   pic:  "Images\archive_jack.jpg"};
const BR = {name: "Bridget",            type: "Balance",    value: 4,   pic:  "Images\archive_bridget.jpg"};

available = [FA, MA, HC, CH, BA, ZA, RA, NA, GD, IN, TE, SI, SO, KY, AX, PO, MI, LE, GI, AN, JA, BR];

var fighter = document.getElementsByName('FighterSelect');

//Display the user's choices on screen 
function displayFighter(){
  for (var i = 0; i < fighter.length; i++) {
    if(fighter[i].checked){
      document.getElementById("P1C").innerHTML = "You Choose:<br><span style='color: red'>" + fighter[i].value + "</span>";
    }
  }
}

//Simulate a fight based on given fighter values
function versus(){
  var userName = getName(fighter);
  var userValue = getValue(userName);
  var userPic = getPic(userName);
  var oppName = getRandomCharacter();
  var oppValue = getValue(oppName);
  var oppPic = getPic(oppName);


  if(getName(fighter)){
    document.getElementById("result").innerHTML = "<br><span style='color: red'>" + userName+ "</span> vs <span style='color: blue'>" + oppName + "</span><br><br>";
    document.getElementById("result1").innerHTML = whosBetter(userValue, oppValue);
  } 
}

//Determine who won the fight
function whosBetter(a, b){
  return a > b 
    ? "You Win!!!" 
    : b > a  
    ? " You Lose!!!" 
    : "Draw!!";
}

//Get the name of the fighter the user has picked
function getName(roster){
  for (var i = 0; i < roster.length; i++) {
    if(roster[i].checked){
      return roster[i].value;
    }
  }
}

//Correspond the user's choice with the right value
function getValue(fightername){
  for (var j = 0; j < available.length; j++) {
    if(fightername == available[j].name){
      return available[j].value;;
    }
  }
}

function getPic(name){
  for (var j = 0; j < available.length; j++) {
    if(name == available[j].name){
      return available[j].pic;;
    }
  }
}

//RNG
function getRandom(){
  var amt = available.length;
  var x = Math.random() * amt;
  var y = Math.floor(x);
  return y;

}

//RNG to get a random fighter
function getRandomCharacter(){
  var num = getRandom();
  var x = available[num].name;
  return x;
}