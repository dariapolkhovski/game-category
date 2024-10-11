const categoriesList = [
    "Напитки",
    "Популярная еда в России",
    "Сети быстрого питания",
    "Сладости",
    "Специи, приятности, приправы",
    "Фрукты, ягоды, овощи",
    "Что в холодильнике",
    "Лучшие друзья никогда не...",
    "Известные кинофразы"
];

let selectedCategories = [];
let randomLetter = '';
let timer;
let timeLeft = 30; // Время на ответы в секундах

function getRandomCategories() {
    const shuffled = categoriesList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
}

function startGame() {
    selectedCategories = getRandomCategories();
    displayCategories();
    document.getElementById('startGameBtn').style.display = 'none';
    document.getElementById('chooseLetterBtn').style.display = 'inline';
    document.getElementById('changeCategoryBtn').style.display = 'inline';
    
    // Анимация выбора категорий
    const animationCategories = document.getElementById('animationCategories');
    animationCategories.innerHTML = "<h2>Выбираем категории...</h2>";
    animationCategories.style.display = 'block';
    setTimeout(() => {
        animationCategories.style.display = 'none';
    }, 2000);
}

function displayCategories() {
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = "<h2>Категории:</h2><ul>" + selectedCategories.map(cat => "<li>" + cat + "</li>").join("") + "</ul>";
}

function chooseLetter() {
    const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const letterDiv = document.getElementById('letter');
    letterDiv.innerHTML = "<h2>Выбрана буква: " + randomLetter + "</h2>";
    
    // Анимация рулетки
    const animationLetter = document.getElementById('animationLetter');
    animationLetter.innerHTML = "<h2>Выбираем букву...</h2>";
    animationLetter.style.display = 'block';
    setTimeout(() => {
        animationLetter.style.display = 'none';
    }, 2000);
    
    showInputFields();
}

function startTimer() {
    timeLeft = 30; // Сброс таймера
    const timerDiv = document.getElementById('timer');
    timerDiv.innerHTML = "<h2>Осталось времени: " + timeLeft + " секунд</h2>";

    timer = setInterval(() => {
        timeLeft--;
        timerDiv.innerHTML = "<h2>Осталось времени: " + timeLeft + " секунд</h2>";

        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswers();
        }
    }, 1000);
}

function showInputFields() {
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = "<h2>Введите ваши ответы:</h2>";
    selectedCategories.forEach((category, index) => {
        answersDiv.innerHTML += <label>${category}: <input type="text" id="answer${index}" /></label><br>;
    });
    answersDiv.innerHTML += <button onclick="checkAnswers()">Проверить ответы</button>;
    startTimer();
}

function checkAnswers() {
    clearInterval(timer);
    const answersDiv = document.getElementById('answers');
    const results = [];

    selectedCategories.forEach((category, index) => {
        const userAnswer = document.getElementById(answer${index}).value.trim();
        let resultClass = 'incorrect';
        let possible = getPossibleAnswers(category, randomLetter);

        if (possible.includes(userAnswer)) {
            resultClass = 'correct';
        } else if (possible.some(answer => answer.includes(userAnswer))) {
            resultClass = 'partial';
        }

        results.push(<div class="${resultClass}">${category}: ${userAnswer}</div>);
    });

    answersDiv.innerHTML = results.join("") + "<br><button onclick='showPossibleAnswers()'>Показать возможные ответы</button>";
}

function getPossibleAnswers(category, letter) {
    const answers = {
        "Напитки": ["Апельсиновый сок", "Кофе", "Чай", "Лимонад"],
        "Популярная еда в России": ["Борщ", "Пельмени", "Солянка", "Оливье"],
        "Сети быстрого питания": ["Макдональдс", "KFC", "Бургер Кинг"],
        "Сладости": ["Шоколад", "Конфеты", "Торты"],
        "Специи, приятности, приправы": ["Соль", "Перец", "Укроп"],
        "Фрукты, ягоды, овощи": ["Яблоко", "Вишня", "Морковь"],
        "Что в холодильнике": ["Молоко", "Яйца", "Сыр"],
        "Лучшие друзья никогда не...": ["Ссорятся", "Лгут", "Предают"],
        "Известные кинофразы": ["Я вернусь", "Хочу, чтобы ты знал"]
    };
    return answers[category].filter(answer => answer.startsWith(letter));
}

function showPossibleAnswers() {
    const answersDiv = document.getElementById('answers');
    const possibleAnswersDiv = document.createElement('div');
    possibleAnswersDiv.innerHTML = "<h3>Возможные ответы:</h3>";
    selectedCategories.forEach(category => {
        possibleAnswersDiv.innerHTML += <strong>${category}:</strong> ${getPossibleAnswers(category, randomLetter).join(", ")}<br>;
    });
    answersDiv.appendChild(possibleAnswersDiv);
}

function changeCategory() {
    selectedCategories = getRandomCategories();
    displayCategories();
}
