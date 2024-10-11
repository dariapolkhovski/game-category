
const categories = [
    "Напитки", 
    "Популярная еда в России", 
    "Сети быстрого питания", 
    "Сладости", 
    "Специи, приятности, приправы"
];

let selectedCategory;
let selectedLetter;
let timer;
let timeRemaining;

document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("select-letter").addEventListener("click", selectLetter);
document.getElementById("change-category").addEventListener("click", changeCategory);
document.getElementById("check-answers").addEventListener("click", checkAnswers);

function startGame() {
    selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    document.getElementById("selected-category").innerText = Категория: ${selectedCategory};
    document.getElementById("selected-category").style.display = "block";
    document.getElementById("start-game").style.display = "none";
    document.getElementById("select-letter").style.display = "block";
    document.getElementById("change-category").style.display = "block";
    
    document.getElementById("animation").style.display = "block";
    document.getElementById("animation").innerHTML = "Анимация выбора категории...";
    setTimeout(() => {
        document.getElementById("animation").innerHTML = "Анимация рулета алфавита...";
        setTimeout(() => {
            selectLetter();
        }, 2000);
    }, 2000);
}

function selectLetter() {
    const letters = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split('');
    selectedLetter = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById("selected-letter").innerText = Выбранная буква: ${selectedLetter};
    document.getElementById("selected-letter").style.display = "block";
    document.getElementById("timer").style.display = "block";
    timeRemaining = 60; // Установите время на ответы
    document.getElementById("time-remaining").innerText = timeRemaining;
    startTimer();
    showInputAnswers();
}

function changeCategory() {
    selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    document.getElementById("selected-category").innerText = Категория: ${selectedCategory};
}

function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById("time-remaining").innerText = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert("Время вышло!");
            checkAnswers();
        }
    }, 1000);
}

function showInputAnswers() {
    const inputContainer = document.getElementById("input-answers");
    inputContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        inputContainer.innerHTML += <input type="text" class="answer" placeholder="Ответ ${i + 1}">;
    }
    document.getElementById("answers-container").style.display = "block";
}

function checkAnswers() {
    clearInterval(timer);
    const answers = Array.from(document.querySelectorAll(".answer")).map(input => input.value);
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = '';
    
    answers.forEach(answer => {
        if (answer.toUpperCase().startsWith(selectedLetter)) {
            resultsContainer.innerHTML += <div style="color: green;">${answer} - Правильный ответ!</div>;
        } else if (answer !== "") {
            resultsContainer.innerHTML += <div style="color: red;">${answer} - Неправильный ответ!</div>;
        }
    });
    
    // Ваша логика для отображения возможных ответов может быть добавлена здесь
}
