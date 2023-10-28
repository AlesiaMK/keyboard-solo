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
    word.split('').forEach(item => {
        const letter = document.createElement('span');
        letter.textContent = item;

        fragment.append(letter)
    });

    word.append(fragment)
}

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
        wordMistakes.textContent = mistake
    }
})