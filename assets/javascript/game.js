
var character = {

	name:"",
	hp:150,
	attack:"",
	counterattack:"",
	frame:"",

	chooseHero: function(){

		this.frame.on("click", function(){
			
			$(this).appendTo("#hero");
			$("<div>").text("You picked Aladdin !").appendTo("#hero");
			$("<button>").addClass("btn btn-default primary attack").text("Strike").appendTo("#hero");		
		});
		
	},

	chooseOpponent: function(){

		this.frame.on("click", function(){
			
			$(this).appendTo("#hero");
			$("<div>").text("You picked Jafar !").appendTo("#opponent");
					
		});

	},

}

$(document).ready(function(){

var aladdin = Object.create(character);
var gazeem = Object.create(character);
var jafar = Object.create(character);
var genie = Object.create(character);
aladdin.frame = $("<div>").addClass("characterframe circle aladdin").text(aladdin.hp).appendTo($("#ether"));
gazeem.frame = $("<div>").addClass("characterframe circle gazeem").text(gazeem.hp).appendTo($("#ether"));
jafar.frame = $("<div>").addClass("characterframe circle jafar").text(jafar.hp).appendTo($("#ether"));
genie.frame = $("<div>").addClass("characterframe circle genie").text(genie.hp).appendTo($("#ether"));			

aladdin.chooseHero();
jafar.chooseOpponent();
});
