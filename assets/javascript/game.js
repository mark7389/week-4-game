// get scope to work, dynamics....
// get button to do nothing when there is no opponent.
// get the number values correct????
//---------------------------------------------------------

//empty character object
//-------------------------
var character = {

	hp:"",
	attack:"",
	counterattack:"",
	frame:"",

}
// static variables to catch current values
//-------------------------------------------
var currentChar = Object.create(character);
var currentOpp = Object.create(character);
var attackpower;
var winCounter = 0;
$(document).ready(function(){
//attack btn
var btn = $("<button>").addClass("btn btn-default btn-warning");
//instances of character object to be used in gameplay
var aladdin = Object.create(character);
var thiago = Object.create(character);
var jafar = Object.create(character);
var genie = Object.create(character);
//setting values of character properties respectively
aladdin = {hp: 152, attack:16 , counterattack:24};//logic...which number values to assign.
thiago = {hp: 149, attack: 18, counterattack: 23};//try different combinations see which one works.
jafar = {hp:150, attack: 19, counterattack:22};//These are random, I am working on a case such that each character has only one winning
											//scenario, and three losing scenarios. 
genie = {hp:145,attack:17,counterattack:20}
aladdin.frame = $("<div>").addClass("characterframe circle aladdin").text(aladdin.hp).attr("name","aladdin").appendTo($("#ether"));
thiago.frame = $("<div>").addClass("characterframe circle thiago").text(thiago.hp).attr("name","thiago").appendTo($("#ether"));
jafar.frame = $("<div>").addClass("characterframe circle jafar").text(jafar.hp).attr("name","jafar").appendTo($("#ether"));
genie.frame = $("<div>").addClass("characterframe circle genie").text(genie.hp).attr("name","genie").appendTo($("#ether"));			
//on start
$("#instr").text("Pick A Character");

function isWin(currentOpp){

	if(currentOpp.hp < 1){

		return true;
	}
	else{

		return false;
	}
}
function isLose(currentChar){

	if(currentChar.hp <1 ){
		return true;
	}
	else{

		return false;
	}

}
function control(){

	if(currentChar.hp < currentOpp.counterattack && currentChar.hp < currentOpp.hp){

		return true;
	}
	else{

		return false;
	}
}

//click event for choosing player and opponent
$(".characterframe").on("click", function(){//scope issue
	//if player div is empty, choice is player
	if($("#hero").is(":empty")){
		switch ($(this).attr("name")){
			case "aladdin": currentChar = aladdin; btn.text("Apple"); attackpower = currentChar.attack;
			break;
			case "jafar": currentChar = jafar; btn.text("Kill the boy"); attackpower = currentChar.attack;
			break;
			case "thiago": currentChar = thiago; btn.text("Whack !"); attackpower = currentChar.attack;
			break;
			case "genie": currentChar = genie; btn.text("Et tu Brute!"); attackpower = currentChar.attack;
			break;
		}
		console.log(currentChar);
		$(this).appendTo("#hero");		
		btn.appendTo("#hero");
		// $("#ether").animate({height: "-=75"},"easeInOutSine");
		$("#instr").text("Pick An Opponent");
	}
	//if opponent div is empty and player div is not empty, choice is opponent
	else if(!$("#hero").is(":empty") && $("#opponent").is(":empty")){
		switch ($(this).attr("name")){
			case "aladdin": currentOpp = aladdin;
			break;
			case "jafar": currentOpp = jafar;
			break;
			case "thiago": currentOpp = thiago;
			break;
			case "genie": currentOpp = genie;
			break;
		}
		console.log(currentOpp);	
		$(this).appendTo("#opponent");
		$("#ether").animate({height: "-=12.5%"},"easeInElastic");
		$("#instr").text("Battle");
		
	}

});

btn.on("click", function(){

	if(($("#opponent").is(":empty"))){

			$("#instr").text("Pick Your Next Opponent");
			
	}
		//otherwise game is in play
	else{
		
			if(!isWin(currentOpp) && !isLose(currentChar)){
			if(currentChar.hp < currentOpp.hp && currentChar.hp < currentOpp.counterattack){

				currentOpp.hp = currentOpp.hp + currentChar.attack;
			}
			else if(currentOpp.hp < currentChar.hp && currentOpp.hp < currentChar.attack){

				currentChar.hp = currentChar.hp + currentOpp.counterattack;
			}
			console.log(currentChar.hp+ " " + currentOpp.hp);
			currentOpp.hp = currentOpp.hp - currentChar.attack;
			currentOpp.frame.text(currentOpp.hp);
			currentChar.attack = currentChar.attack + attackpower;
			currentChar.hp = currentChar.hp - currentOpp.counterattack;
			
			currentChar.frame.text(currentChar.hp);
				if(isWin(currentOpp)){

				$("#hero").append("You've Killed your opponent");
				$("#instr").text("Pick Your Next Opponent");
				currentOpp = "";
				winCounter++;
				$("#opponent").empty();
				if(winCounter == 3){
					$("#instr").text("Congratulations");
					$("#ether").animate({height: "+=15%"}, "easeInOutSine");
					$("<div>").text("YOU BEAT THEM ALL!! Refresh to play again").css({"font-size": "25px", "color": "orange"}).appendTo("#ether");
				}
				}
		
			else if(isLose(currentChar)){

				$("#opponent").append("You've Lost, refresh to try again");
				$("#instr").text("Game Over");
			}

			}
		
			

				// currentOpp.hp = currentOpp.hp - currentChar.attack;
			
		
			
			// if(isWin(currentOpp)){

			// 	$("#hero").append("You've Killed your opponent");
			// 	$("#instr").text("Pick Your Next Opponent");
			// 	currentOpp = "";
			// 	$("#opponent").empty();
				
			// }
			// else if(isLose(currentChar)){

			// 	$("#opponent").append("You've Lost")
			// }
			
		
	}

});




});
