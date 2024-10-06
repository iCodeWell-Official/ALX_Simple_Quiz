function checkAnswer() {
    const correctAnswer = "4";

    const checkedBtn = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = checkedBtn.value;

    if (userAnswer === correctAnswer) {
        document.querySelector('#feedback').textContent = "Correct! Well done.";
    } else {
        document.querySelector('#feedback').textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);