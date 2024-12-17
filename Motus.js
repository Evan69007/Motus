const win = document.getElementById("win");
const tryParagraph = document.getElementById("try");
const well = document.getElementById("well");
const miss = document.getElementById("miss");
const notIn = document.getElementById("not");
const wordInput = document.getElementById('word');

export function tryWord(word, base) {
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

		for (let i = 0; i < arrayWord.length; i++) {
			if (arrayBase[i] === arrayWord[i]) {
				wellPlaced.push(arrayWord[i]);
			}
			else if (arrayBase.includes(arrayWord[i])) {
				missplaced.push(arrayWord[i]);
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

export function printWin()
{
	wordInput.value = "";
	win.innerText = "Vous avez gagné";
	tryParagraph.innerText = "";
	well.innerText = "";
	miss.innerText = "";
	notIn.innerText = "";
}

export function printGuess(word, result) {
	win.innerText = ""
	wordInput.value = "";
	tryParagraph.innerText = word;
	well.innerText = "Bien placé: " + result.wellPlaced.join(", ");
	miss.innerText = "Mal placé: " + result.missplaced.join(", ");
	notIn.innerText = "Pas dans le mot: " + result.notInWord.join(", ");
}

export function guess() {
	let base = "dictionnaire";
	let word = wordInput.value;
	if (!word)
	{
		tryParagraph.innerText = "Veuillez entrer un mot"
		return ("No input")
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
