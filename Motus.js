const win = document.getElementById("win");
const tryParagraph = document.getElementById("try");
const well = document.getElementById("well");
const miss = document.getElementById("miss");
const notIn = document.getElementById("not");
const wordInput = document.getElementById('word');

function tryWord(word, base) {
	word = word.toLowerCase()
	base = base.toLowerCase()
	if (word === base) {
		return true;
	}
	else {
		let wellPlaced = [];
		let notInWord = [];
		let missplaced = [];

		let arrayBase = base.split("");
		let arrayWord = word.split("");

		let arrayBaseCopy = arrayBase.slice()

		for (let i = 0; i < arrayWord.length; i++) {
			console.log(arrayBaseCopy);
			if (arrayBase[i] === arrayWord[i]) {
				wellPlaced.push(arrayWord[i]);
				arrayBaseCopy.splice(arrayBaseCopy.indexOf(arrayWord[i]), 1)
			}
			else if (arrayBaseCopy.includes(arrayWord[i])) {
				missplaced.push(arrayWord[i]);
				arrayBaseCopy.splice(arrayBaseCopy.indexOf(arrayWord[i]), 1)
			}
			else {
				notInWord.push(arrayWord[i])
			}
		}
		return {
			wellPlaced: wellPlaced,
			missplaced: missplaced,
			notInWord: notInWord,
		};
	}
}

function resetRendering()
{
	wordInput.value = "";
	tryParagraph.innerText = "";
	well.innerText = "";
	miss.innerText = "";
	notIn.innerText = "";
}

function printWin()
{
	resetRendering()
	win.innerText = "Vous avez gagné";
}

function printGuess(word, result) {
	win.innerText = ""
	wordInput.value = "";
	tryParagraph.innerText = word;
	well.innerText = "Bien placé: " + result.wellPlaced.join(", ");
	miss.innerText = "Mal placé: " + result.missplaced.join(", ");
	notIn.innerText = "Pas dans le mot: " + result.notInWord.join(", ");
}

function guess() {
	let base = "dictionnaire";
	let word = wordInput.value;
	if (!word || !isNaN(parseInt(word)))
	{
		resetRendering()
		tryParagraph.innerText = "Veuillez entrer un mot"
		return ("Bad input")
	}
	let result = tryWord(word, base);
	if (result === true)
	{
		printWin()
	}
	else
	{
		printGuess(word, result)
	}
	return ("Game finished")
}
