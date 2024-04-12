var quizIntroEl = document.getElementById("quiz-intro");
var timerEl = document.getElementById("timer");
var timerLabelEl = document.getElementById("timer-label");
var viewScoreEl = document.getElementById("view-score");
var startQuizEl = document.getElementById("start-quiz-btn");
var questionSectionEl = document.getElementById("questions"); 
var questionTitleEl = document.getElementById("question"); 
var choicesEl = document.getElementById("choices");
var resultEl = document.getElementById("results");
var messageEl = document.getElementById("message");
var nameInputEl = document.getElementById("name-input");
var finalScoreEl = document.getElementById("final-score");
var inputNamesEl = document.getElementById("name"); 
var submitNameEl = document.getElementById("submit-name-btn");
var highScoresEl = document.getElementById("high-scores");
var highScoreListEl = document.getElementById("high-score-list");
var goBackBtnEl = document.getElementById("back-button"); 
var clearHighscoreBtnEl = document.getElementById("clear-button"); 
var setIntervalId;
var timeRemaining = questionData.length * 15;
var index = 0;

function startQuiz() {
    quizIntroEl.classList.add("hide"); 
    questionSectionEl.classList.remove("hide");
    renderQuestions();
    setIntervalId = setInterval(startTimer, 1000);
}

function renderQuestions() {
    resultEl.classList.add("hide"); 
    messageEl.innerHTML = "";
    if (index < questionData.length) {
        questionTitleEl.innerHTML = questionData[index].title; 
        choicesEl.textContent = ""; 
        nameInputEl.value = ""; 
        for (var i = 0; i < questionData[index].choices.length; i++) {
            var li = document.createElement("li");
            var button = document.createElement("button");
            button.textContent = questionData[index].choices[i];
            li.appendChild(button);
            choicesEl.appendChild(li);
        }
    } else {
        endQuiz();
    }
}

function refreshData() {
    viewScoreEl.classList.remove("hide");
    if (timerLabelEl) timerLabelEl.classList.remove("hide");
    timeRemaining = questionData.length * 15;
    timerEl.textContent = "0"; 
    index = 0;
}


startQuizEl.addEventListener("click", startQuiz);
choicesEl.addEventListener("click", nextQuestion);
submitNameEl.addEventListener("click", storeStudentData);
goBackBtnEl.addEventListener("click", goBackMain);
clearHighscoreBtnEl.addEventListener("click", clearHighScores);
viewScoreEl.addEventListener("click", viewHighScore);
refreshData();