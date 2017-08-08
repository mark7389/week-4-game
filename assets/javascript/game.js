var character = {

	hp:"",
	attack:"",
	counterattack:"",
	frame:"",

}
var currentChar;
var currentOpp;
var attackpower;

$(document).ready(function(){

var btn = $("<button>").addClass("btn btn-default btn-warning");
var aladdin = Object.create(character);
var gazeem = Object.create(character);
var jafar = Object.create(character);
var genie = Object.create(character);

aladdin = {hp: 150, attack: 30, counterattack:40};
gazeem = {hp: 130, attack: 22, counterattack: 50};
jafar = {hp:200, attack: 45, counterattack:60};
genie = {hp:180,attack:35,counterattack:45}
aladdin.frame = $("<div>").addClass("characterframe circle aladdin").text(aladdin.hp).attr("name","aladdin").appendTo($("#ether"));
gazeem.frame = $("<div>").addClass("characterframe circle gazeem").text(gazeem.hp).attr("name","gazeem").appendTo($("#ether"));
jafar.frame = $("<div>").addClass("characterframe circle jafar").text(jafar.hp).attr("name","jafar").appendTo($("#ether"));
genie.frame = $("<div>").addClass("characterframe circle genie").text(genie.hp).attr("name","genie").appendTo($("#ether"));			

$("#instr").text("Pick A Character");
$(".characterframe").on("click", function(){

	if($("#hero").is(":empty")){
		switch ($(this).attr("name")){
			case "aladdin": currentChar = aladdin; btn.text(""); attackpower = currentChar.attack;
			break;
			case "jafar": currentChar = jafar; btn.text(""); attackpower = currentChar.attack;
			break;
			case "gazeem": currentChar = gazeem; btn.text(""); attackpower = currentChar.attack;
			break;
			case "genie": currentChar = genie; btn.text(""); attackpower = currentChar.attack;
			break;
		}
		console.log(currentChar);
		$(this).appendTo("#hero");		
		btn.appendTo("#hero");
		$("#ether").animate({height: "-=180px"},"easeInOutSine");
		$("#instr").text("Pick An Opponent");
	}
	else if(!$("hero").is(":empty") && $("#opponent").is(":empty")){
		switch ($(this).attr("name")){
			case "aladdin": currentOpp = aladdin;
			break;
			case "jafar": currentOpp = jafar;
			break;
			case "gazeem": currentOpp = gazeem;
			break;
			case "genie": currentOpp = genie;
			break;
		}
		console.log(currentOpp);	
		$(this).appendTo("#opponent");
		$("#ether").animate({height: "-=180px"},"easeInOutSine");
		$("#instr").text("Battle")
	}
});

btn.on("click", function(){

	currentOpp.hp = currentOpp.hp - currentChar.attack;
	currentChar.attack = currentChar.attack + attackpower;
	currentOpp.frame.text(currentOpp.hp);
	currentChar.hp = currentChar.hp - currentOpp.counterattack;
	currentChar.frame.text(currentChar.hp);
	if(currentOpp.hp <= 0){

		currentOpp.hp = 0;
		currentOpp.frame.text(currentOpp.hp);
		$("#opponent").empty();
		$("#instr").text("Pick Your Next Opponent")
	}
	else if(currentChar.hp <= 0){

		currentChar.hp = 0;
		currentChar.frame.text(currentChar.hp);
		var lose = $("<div>").text("Better Luck Next Time, " + "Refresh to play again");
		lose.appendTo("#hero");
	}
	
});





});
