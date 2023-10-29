const words = ['letter', 'book', 'child', 'bed', 'reason', 'pear', 'love', 'gold', 'window', 'sale', 'carrot'];

function randomWord(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

const mainWord = document.querySelector('.word');
const correctCount = document.querySelector('.correct-count');
const wrongCount = document.querySelector('.wrong-count');
const wordMistakes = document.querySelector('.word-mistakes');
const timer = document.querySelector('#timer');

function getRandomWord() {
    const fragment = new DocumentFragment();
    const word = words[randomWord(0, words.length - 1)];
    for (let letter of word) {
        const containerLetter = document.createElement('span');
        containerLetter.textContent = letter;
        fragment.append(containerLetter)
    }
    mainWord.append(fragment)
};

getRandomWord()

let i = 0;
let mistake = 0;
let correct = 0;
let wrong = 0;

document.addEventListener('keydown', function(event) {
    const element = mainWord.querySelectorAll('span');


    if (event.key === element[i].textContent) {
        element[i].className = 'c';
        i++
    } else {
        element[i].className = 'w';
        mistake++;
        wordMistakes.textContent = mistake;
    }
});

if (i === element.length) {
    if (mistake != 0) {
        wtong++;
        wrongCount.textContent = wrong;
    } else {
        correct++;
        correctCount.textContent = correct;
    }

    getRandomWord();
    wordMistakes.textContent = '0';
    mistake = 0;
    i = 0;
}

if (correctCount.textContent === 5) {
    alert(`Вы победили! Ваше время:${timer.textContent}`);
} else if (wrong === 5) {
    alert(`К сожалению, Вы проиграли! Ваше время:${timer.textContent}`)

}

/*Хотела попробовать добавить таймер , но уже по времени не успевала*/