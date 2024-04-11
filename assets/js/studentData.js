var studentDatalog = []

function storeStudentData() {
    studentData = {
        name : inputNameEl.value,
        score : finalScoreEl.textContent
    }
    studentDatalog.push(studentData)
    localStorage.setItem('studentDatalog', JSON.stringify(studentDatalog))
    questionSectionEl.classList.add("hide")
    messageEl.classList.add("hide")
    nameInputEl.classList.add("hide")
    highScoresEl.classlist.remove("hide")
    viewScoreEl.classList.add("hide")
    timerLabelEl.classList.add("hide")
    
    var getScores = JSON.parse(localStorage.getItem("studentDatalog"))
    getScores.sort(compareScores)
    highScoreListEl.innerHTML = ""
    highScoreListEl.classList.remove("hide")
    if(getScores != null){
        for(var i=0; i < getScores.length; i++) {
            var studentli = document.createElement("li")
            studentli.textContent = getScores[i].name+" - "+getScores[i].score
            highScoreListEl.append(studentli)
        }
    }
}

function viewHighScore() {
    
}