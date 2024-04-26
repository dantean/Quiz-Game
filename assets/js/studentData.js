// var studentDatalog = [];
const getScores = JSON.parse(localStorage.getItem("studentDatalog")) || [];
const highScoresEl = document.getElementById("high-scores-section");
const highScoreListEl = document.getElementById("high-score-list");
const timerEl = document.getElementById("timer");
const clearButtonEl = document.getElementById("clear-button");
const backButtonEl = document.getElementById("back-button");

function storeStudentData(nameInputEl, finalScoreEl, questionSectionEl, resultEl) {
    var studentData = {
        name: nameInputEl.value,
        score: finalScoreEl.textContent
    };
    questionSectionEl.classList.add("hide");
    resultEl.classList.add("hide");
    nameInputEl.classList.add("hide");
    highScoresEl.classList.remove("hide");
    timerEl.classList.add("hide");


getScores.push(studentData);
localStorage.setItem("studentDatalog", JSON.stringify(getScores));

    getScores.sort((a, b) => b.score - a.score);
    highScoreListEl.innerHTML = "";
    highScoreListEl.classList.remove("hide");
    if (getScores != null) {
        for (var i = 0; i < getScores.length; i++) {
            var studentli = document.createElement("li");
            studentli.textContent = getScores[i].name + " - " + getScores[i].score;
            highScoreListEl.appendChild(studentli);
        }
    }
}

function goBackMain() {
    document.location.reload();
}

function clearHighScores() {
    highScoreListEl.innerHTML = "";
    localStorage.setItem("studentDatalog", []);
}

function viewHighScore() {
}

clearButtonEl.addEventListener("click", clearHighScores);
backButtonEl.addEventListener("click", goBackMain)