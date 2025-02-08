const messages = [
    "You are the best thing that ever happened to me ❤️",
    "Every moment with you is magical ",
    "I really love you so much more than words can say ",
    "You make my life so much brighter ",
    "I can't wait to create more memories with you!",
	"I'm sorry for this busy days, bawi tayo soon",
	"I really appreciate you sa pagpunta mo sa akin weekly",
	"I will be a good Husband once the time comes",
	"Thank you for being patient these days",
	"Tayo ang favorite ni universe, pero mas favorite kita",
	"Miss kita everyday",
	"SG kaya...",
	"Cali girl cutie",
	"Kung papapiliin ako if 24 chicken, yabu, or ikaw. Pipiliin ko mag 24 chicken and yabu kasama ikaw"
];
let shuffledMessages = shuffleArray([...messages]); // Create a shuffled copy
let index = 0;

function showMessage() {
    document.getElementById("message").textContent = shuffledMessages[index];
    index++;

    if (index >= shuffledMessages.length) {
        shuffledMessages = shuffleArray([...messages]); // Reshuffle when all are seen
        index = 0;
    }
}

// Function to shuffle array using Fisher-Yates Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}