var quizIntroEl = document.getElementById("quiz-intro")
var timerEl = document.getElementById("timer")
var timerLabelEl =  document.getElementById("timer-label")
var viewScoreEl = document.getElementById("view-score")
var startQuizbtnEl = document.getElementById("start-quiz-btn")
var questionSectionEl = document.getElementById("question-section")
var questionTitleEl = document.getElementById("question-title")
var choiceListEl = document.getElementById("choice-list")
var resultBlkEl = document.getElementById("result-blk")
var messageEl = document.getElementById("message")
var initialsInputEl = document.getElementById("name-input")
var finalScoreEl = document.getElementById("final-score")
var inputInitialsEl = document.getElementById("input-name")
var submitInitialsbtnEl = document.getElementById("submit-name-btn")
var highScoresEl = document.getElementById("high-scores")
var highScoreListEl =document.getElementById("high-score-list")
var goBackbtnEl = document.getElementById("return-btn")
var clearHighscorebtnEl = document.getElementById("clear-scores-btn")
var setIntervalId
var timeRemaining = questionData.length * 15
var index = 0

function startQuiz() {
    quizIntroEl.classList.add("hide")
    questionSectionEl.classList.remove("hide")
    renderQuestions()
    setIntervalId = setInterval(startTimer, 1000)
}

function renderQuestions() {
    resultsEl.classList.add("hide")
    messageEl.innerHTML = ""
    if(index < questionData.length) {
        questionTitleEl.innerHTML=questionData[index].title
        choiceListEl.textContet = ""
        inputNameEl.value = ""
        for(var i=0; i <questionData[index].choices.length; i++) {
            var li = document.createElement("li")
            var button = document.createElement("button")
            button.textContent = questionData[index].choices[i]
            li.appendChild(button)
            choiceListEl.appendChild(li)
        } 
    }else {
        endQuiz()
    }
}

function refreshData() {
    viewScoreEl.classList.remove("hide")
    timerLabelEl.classList.remove("hide")
    timeRemaining = questionData.length * 15
    timerEl.textContent = 0
    index = 0
}

function startTimer() {
    timerEl.textContent = timeRemaining --
    if(timeRemaining === 0) {
        console.log(timeRemaining)
        endQuiz()
    }
}

function nextQuestion(event) {
    
}