const words = [];
let currentWordIndex = 0;

const newWordInput = document.getElementById("new-word");
const addWordButton = document.getElementById("add-word");
const wordToTranslate = document.getElementById("word-to-translate");
const userTranslationInput = document.getElementById("user-translation");
const checkTranslationButton = document.getElementById("check-translation");
const resultMessage = document.getElementById("result");

addWordButton.addEventListener("click", () => {
    const newWord = newWordInput.value.trim();
    if (newWord !== "") {
        words.push(newWord);
        newWordInput.value = "";
        updateExercise();
    }
});

checkTranslationButton.addEventListener("click", () => {
    const userTranslation = userTranslationInput.value.trim();
    const correctTranslation = words[currentWordIndex];
    
    if (userTranslation === correctTranslation) {
        resultMessage.textContent = "Correct!";
    } else {
        resultMessage.textContent = `Incorrect. The correct translation is: ${correctTranslation}`;
    }

    currentWordIndex = (currentWordIndex + 1) % words.length;
    updateExercise();
    userTranslationInput.value = "";
});

function updateExercise() {
    if (words.length === 0) {
        wordToTranslate.textContent = "No words to practice yet.";
    } else {
        wordToTranslate.textContent = `Translate: ${words[currentWordIndex]}`;
    }
    resultMessage.textContent = "";
}

updateExercise();

