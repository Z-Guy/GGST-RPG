const FA = {name: "Faust",              type: "Unique",     value: 5};
const MA = {name: "May",                type: "Balance",    value: 5};
const HC = {name: "Happy Chaos",        type: "Shooting",   value: 9};
const CH = {name: "Chipp Zanuff",       type: "High Speed", value: 6};
const BA = {name: "Baiken",             type: "Balance",    value: 3};
const ZA = {name: "Zato=1",             type: "Technical",  value: 4};
const RA = {name: "Ramlethal Valentine",type: "Shooting",   value: 7};
const NA = {name: "Nagoriyuki",         type: "One-Shot",   value: 6};
const GD = {name: "Goldlewis Dickinson",type: "Power",      value: 4};
const IN = {name: "I-no",               type: "Rush",       value: 5};
available = [FA, MA, HC, CH, BA, ZA, RA, NA, GD, IN];

var fighter = document.getElementsByName('FighterSelect');

//Display the user's choices on screen 
function displayFighter(){
  for (var i = 0; i < fighter.length; i++) {
    if(fighter[i].checked){
      document.getElementById("P1C").innerHTML = fighter[i].value;
    }
  }
}

//Simulate a fight based on given fighter values
/*function versus(){
  var userName = getName(fighter);
  var userValue = getValue(userName);
  var oppName = getName(opponent);
  var oppValue = getValue(oppName);

  if(getName(fighter) && getName(opponent)){
    document.getElementById("result").innerHTML = userName+ " vs " + oppName;
    document.getElementById("result1").innerHTML = whosBetter(userValue, oppValue);
  } 
}*/

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

function getRandom(){
  var amt = available.length;
  var x = Math.random() * amt;
  var y = Math.floor(x);
  return y;

}

function getRandomCharacter(){
  var num = getRandom();
  var x = available[num].name;
  document.getElementById("randy").innerHTML = x;
}