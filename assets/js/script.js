document.addEventListener("DOMContentLoaded", function() {
    var quizIntroEl = document.getElementById("quiz-intro");
    var timerEl = document.getElementById("timer");
    var startQuizEl = document.getElementById("start-quiz-btn");
    var questionSectionEl = document.getElementById("questions"); 
    var questionTitleEl = document.getElementById("question"); 
    var choicesEl = document.getElementById("choices");
    var resultEl = document.getElementById("results");
    var nameInputEl = document.getElementById("name-input");
    var finalScoreEl = document.getElementById("final-score");
    var submitNameEl = document.getElementById("submit-name-btn");
    var setIntervalId;
    var timeRemaining = 60; 
    var index = 0;
    var score = 0;  

    function startQuiz() {
        quizIntroEl.classList.add("hide"); 
        questionSectionEl.classList.remove("hide");
        renderQuestions();
        setIntervalId = setInterval(startTimer, 1000);
    }

    function renderQuestions() {
        if (index < questionData.length) {
            questionTitleEl.innerHTML = questionData[index].title; 
            choicesEl.innerHTML = "";
            questionData[index].choices.forEach(function(choice) {
                var li = document.createElement("li");
                var button = document.createElement("button");
                button.textContent = choice;
                button.addEventListener("click", function() {
                    nextQuestion(choice);
                });
                li.appendChild(button);
                choicesEl.appendChild(li);
            });
        } else {
            endQuiz();
        }
    }

    function nextQuestion(choice) {
        var correctAnswer = questionData[index].solution;
        if (choice === correctAnswer) {
            score += 10;  
        } else {
            score -= 10;  
            timeRemaining -= 10;  
        }
        index++;
        renderQuestions();
    }

    function endQuiz() {
        clearInterval(setIntervalId);
        questionSectionEl.classList.add("hide");
        resultEl.classList.remove("hide");
        finalScoreEl.textContent = score + timeRemaining;  
    }

    function startTimer() {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerEl.textContent = timeRemaining;
        } else {
            endQuiz();
        }
    }

    startQuizEl.addEventListener("click", startQuiz);
    submitNameEl.addEventListener("click", storeStudentData);
});