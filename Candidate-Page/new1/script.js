const quizForm = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");

quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = {
        q1: quizForm.q1.value,
        q2: quizForm.q2.value,
        q3: quizForm.q3.value,
        q4: quizForm.q4.value,
        q5: quizForm.q5.value,
        q6: quizForm.q6.value,
        q7: quizForm.q7.value,
        q8: quizForm.q8.value,
        q9: quizForm.q9.value,
        q10: quizForm.q10.value,

    };

    const score = calculateScore(answers);
    showResult(score);
    hideQuizForm();
});

function calculateScore(answers) {
    let score = 0;
    if (answers.q1 === "a") {
        score++;
    }
    if (answers.q2 === "b") {
        score++;
    }
    if (answers.q3 === "c") {
        score++;
    }
    if (answers.q4 === "a") {
        score++;
    }
    if (answers.q5 === "b") {
        score++;
    }
    if (answers.q6 === "c") {
        score++;
    }
    if (answers.q7 === "a") {
        score++;
    }
    if (answers.q8 === "d") {
        score++;
    }
    if (answers.q9 === "a") {
        score++;
    }
    if (answers.q10 === "c") {
        score++;
    }
    return score;
}

function showResult(score) {
    resultDiv.innerHTML = `<p>Your score: ${score} out of 10</p>`;
}

function hideQuizForm() {
    quizForm.style.display = "none";
}
