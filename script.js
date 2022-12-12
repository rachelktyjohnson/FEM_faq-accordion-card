const question_cards = document.querySelector(".question-cards");

question_cards.addEventListener('click', (event)=>{
    if (event.target.className === "question"){
        event.target.parentNode.classList.toggle("active");
    }
})
