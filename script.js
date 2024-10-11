document.addEventListener('DOMContentLoaded', function () {
    const startGameButton = document.getElementById('startGameButton');
    const questionArea = document.getElementById('questionArea');
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answerInput');
    const submitAnswerButton = document.getElementById('submitAnswerButton');
    const feedbackElement = document.getElementById('feedback');

    const questions = [
        { question: "Какой цвет у неба?", answer: "голубой" },
        { question: "Сколько дней в неделе?", answer: "семь" },
        { question: "Столица Франции?", answer: "париж" }
    ];

    let currentQuestionIndex = 0;

    startGameButton.addEventListener('click', function () {
        questionArea.classList.remove('hidden');
        startGameButton.classList.add('hidden');
        showQuestion();
    });

    submitAnswerButton.addEventListener('click', function () {
        checkAnswer();
    });

    function showQuestion() {
        questionElement.textContent = questions[currentQuestionIndex].question;
        feedbackElement.classList.add('hidden');
        answerInput.value = '';
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.toLowerCase();
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Правильно!";
        } else {
            feedbackElement.textContent = "Неправильно. Попробуйте снова!";
        }

        feedbackElement.classList.remove('hidden');

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            feedbackElement.textContent += " Игра окончена!";
            submitAnswerButton.disabled = true;
        }
    }
});
