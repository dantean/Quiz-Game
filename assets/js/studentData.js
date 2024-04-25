var studentDatalog = [];
var highScoresEl = document.getElementById("high-scores-section");
// var highScoreList = document.getElementById();
const timerEl = document.getElementById("timer");

function storeStudentData(nameInputEl, finalScoreEl, questionSectionEl, resultEl) {
    console.log("hello")
    var studentData = {
        name: nameInputEl.value,
        score: finalScoreEl.textContent
    };
    studentDatalog.push(studentData);
    localStorage.setItem('studentDatalog', JSON.stringify(studentDatalog));
    questionSectionEl.classList.add("hide");
    resultEl.classList.add("hide");
    nameInputEl.classList.add("hide");
    highScoresEl.classList.remove("hide");
    // viewScoreEl.classList.add("hide");
    timerEl.classList.add("hide");

    var getScores = JSON.parse(localStorage.getItem("studentDatalog"));
    getScores.sort((a, b) => b.score - a.score);
    // highScoreListEl.innerHTML = "";
    // highScoreListEl.classList.remove("hide");
    if (getScores != null) {
        for (var i = 0; i < getScores.length; i++) {
            var studentli = document.createElement("li");
            studentli.textContent = getScores[i].name + " - " + getScores[i].score;
            highScoreListEl.appendChild(studentli);
        }
    }
}

function goBackMain() {
}

function clearHighScores() {
}

function viewHighScore() {
}