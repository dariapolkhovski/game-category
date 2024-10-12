// Список категорий
const categories = [
    'Напитки', 'Популярная еда в России', 'Сети быстрого питания', 'Сладости',
    'Специи, приправы', 'Фрукты, ягоды, овощи', 'Что в холодильнике',
    'Завтра будет...', 'Лучшие друзья никогда не...', 'Мой начальник...', 
    'Моя собака...', 'Пахнет как...', 'Известные кинофраншизы', 'Мультфильмы и мультсериалы',
    'Фильмы', 'Города', 'Известные ученые', 'Исторические люди', 'Минералы и камни',
    'Достопримечательности', 'Страны', 'Типично русские вещи', 'Млекопитающие', 
    'Птицы', 'Рыбы', 'Части тела', 'Элементы таблицы Менделеева', 'Музыкальные инструменты',
    'Актеры и актрисы', 'Все для дня рождения', 'Профессии', 'Марки автомобилей', 
    'Женские имена', 'Мужские имена', 'Слова с буквами "ор"', 'Слова с буквами "ст"',
    'Слова с буквой "ь"', 'Вещи в ванной', 'Круглые вещи', 'Липкие вещи'
];

// Функция для выбора случайных категорий
function getRandomCategories() {
    let randomCategories = [];
    while (randomCategories.length < 5) {
        const randomIndex = Math.floor(Math.random() * categories.length);
        const randomCategory = categories[randomIndex];
        if (!randomCategories.includes(randomCategory)) {
            randomCategories.push(randomCategory);
        }
    }
    return randomCategories;
}

// Функция для выбора случайной буквы
function getRandomLetter() {
    const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ';
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
}

// Функция для начала игры
function startGame() {
    // Очистка предыдущего результата
    document.getElementById('category-list').innerHTML = '';
    
    // Получаем случайные категории
    const randomCategories = getRandomCategories();
    randomCategories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        document.getElementById('category-list').appendChild(li);
    });

    // Получаем случайную букву
    const randomLetter = getRandomLetter();
    document.getElementById('random-letter').textContent = randomLetter;
}
