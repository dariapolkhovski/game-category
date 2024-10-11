let categories = ['Напитки', 'Сладости', 'Города', 'Страны'];
let selectedCategory = '';
let selectedLetter = '';
let timer;
let timeLeft = 60;

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('change-category-button').addEventListener('click', changeCategory);
document.getElementById('change-letter-button').addEventListener('click', changeLetter);

function startGame() {
    selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    selectedLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
    document.getElementById('category-display').innerText = 'Категория: ' + selectedCategory;
    document.getElementById('letter-display').innerText = 'Буква: ' + selectedLetter;
    startTimer();
    setupAnswerInputs();
}

function startTimer() {
    timeLeft = 60;
    document.getElementById('timer').innerText = 'Осталось времени: ' + timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').innerText = 'Осталось времени: ' + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswers();
        }
    }, 1000);
}

function setupAnswerInputs() {
    const answerInputs = document.getElementById('answer-inputs');
    answerInputs.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Ответ ' + (i + 1);
        answerInputs.appendChild(input);
    }
}

function changeCategory() {
    const newCategory = prompt("Введите новую категорию:");
    if (newCategory) {
        categories.push(newCategory);
        alert('Категория добавлена: ' + newCategory);
    }
}

function changeLetter() {
    const newLetter = prompt("Введите новую букву (A-Z):").toUpperCase();
    if (newLetter && /^[A-Z]$/.test(newLetter)) {
        selectedLetter = newLetter;
        document.getElementById('letter-display').innerText = 'Буква: ' + selectedLetter;
    } else {
        alert('Пожалуйста, введите букву от A до Z.');
    }
}

function checkAnswers() {
    clearInterval(timer);
    // Здесь вы можете добавить логику для проверки ответов
    document.getElementById('result-display').innerText = 'Игра окончена!';
}
