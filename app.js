const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");

function getRandomNumber() {

	return Math.floor(Math.random() * 6) + 1;
}
console.log(getRandomNumber());


function getRandomDice() {
	
	diceTriggerEl.addEventListener("click", function(){
		let randomNumber = getRandomNumber();
        diceImageEl.src = "images/dice" + randomNumber + ".png";
	})
}
getRandomDice();