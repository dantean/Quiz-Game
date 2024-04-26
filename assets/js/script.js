document.addEventListener("DOMContentLoaded", () => {
    const quizIntroEl = document.getElementById("quiz-intro");
    const timerEl = document.getElementById("timer");
    const startQuizEl = document.getElementById("start-quiz-btn");
    const questionSectionEl = document.getElementById("question-panel");
    const questionTitleEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");
    const resultEl = document.getElementById("results");
    const nameInputEl = document.getElementById("name-input");
    const finalScoreEl = document.getElementById("final-score");
    const submitNameEl = document.getElementById("submit-name-btn");
    const messageEl = document.getElementById("message");
    let setIntervalId;
    let timeRemaining = 60;
    let index = 0;
    let score = 0;

// timer and question sections are hidden at the start

    timerEl.style.display = 'none';
    questionSectionEl.style.display = 'none';

// Pressing the 'start challenge' button hides the quiz intro and un-hides the timer and questions
    const startQuiz = () => {
        if (startQuizEl.textContent === "Start Challenge") {
            quizIntroEl.classList.add("hide");
            questionSectionEl.style.display = '';
            timerEl.style.display = '';
            startQuizEl.textContent = "Restart";
            renderQuestions();

// logic concerning the timer starting at 60 seconds and ticking down as it renders questions
            setIntervalId = setInterval(startTimer, 1000);
        } else {
            clearInterval(setIntervalId);
            timeRemaining = 60;
            index = 0;
            score = 0;
            startTimer();
            renderQuestions();
        }
    };
// logic for rendering questions from the /js/questionData.js file. When there are no more questions, it ends the quiz. 
    const renderQuestions = () => {
        if (index < questionData.length) {
            questionTitleEl.innerHTML = questionData[index].title;
            choicesEl.innerHTML = "";
            questionData[index].choices.forEach(choice => {
                const li = document.createElement("li");
                const button = document.createElement("button");
                button.textContent = choice;
                button.addEventListener("click", () => nextQuestion(choice));
                li.appendChild(button);
                choicesEl.appendChild(li);
            });
        } else {
            endQuiz();
        }
    };
// Choosing the correct answer gives + 10 score, the wrong answer gives -10 score
    const nextQuestion = choice => {
        const correctAnswer = questionData[index].solution;
        if (choice === correctAnswer) {
            score += 10;
        } else {
            score -= 10;
            timeRemaining -= 10;
        }
        index++;
        renderQuestions();
    };

// when the quiz ends, hide the questions and timer, and un-hide the results  
    const endQuiz = () => {
        clearInterval(setIntervalId);
        questionSectionEl.style.display = 'none';
        timerEl.style.display = 'none';
        resultEl.classList.remove("hide");
        finalScoreEl.textContent = score + timeRemaining;
    };

    const startTimer = () => {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerEl.textContent = timeRemaining;
        } else {
            endQuiz();
        }
    };
    
    startQuizEl.addEventListener("click", startQuiz);
    submitNameEl.addEventListener("click", ()=> storeStudentData(nameInputEl, finalScoreEl, questionSectionEl, resultEl));

});