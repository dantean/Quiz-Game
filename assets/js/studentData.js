//declared variables at the start of thedd document to avoid errors
let getScores, highScoresEl, highScoreListEl, timerEl, clearButtonEl, backButtonEl;

// waits for the DOM to finish loading before assigning variables to avoid errors

document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("studentDatalog");
    getScores = storedData ? JSON.parse(storedData) : [];
    highScoresEl = document.getElementById("high-scores-section");
    highScoreListEl = document.getElementById("high-score-list");
    timerEl = document.getElementById("timer");
    clearButtonEl = document.getElementById("clear-button");
    backButtonEl = document.getElementById("back-button");

    // Add event listeners inside the DOMContentLoaded block

    clearButtonEl.addEventListener("click", clearHighScores);
    backButtonEl.addEventListener("click", goBackMain);
});

// function to store Name, final score, questions, and results data

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

// pushes final score to the high score list
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
// the Back button reloads the quiz from the beginning
function goBackMain() {
    document.location.reload();
}

// makes the Clear High Scores button delete all local storage data and update the page in realtime
function clearHighScores() {
    highScoreListEl.innerHTML = "";
    localStorage.setItem("studentDatalog", []);
}

// displays high scores

function viewHighScore() {
}
