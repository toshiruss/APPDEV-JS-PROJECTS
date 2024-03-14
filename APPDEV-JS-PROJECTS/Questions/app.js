const questions= document.querySelectorAll('.question')
questions.forEach((question) => {
    console.log(question)
    const btn = question.querySelector('.question-btn')
    //btn event
    btn.addEventListener('click', () => {
        //one question at a time
        questions.forEach((item) => {
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        //show answer to question
        question.classList.toggle('show-text')
    })
})