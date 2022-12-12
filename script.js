const question_cards = document.querySelector(".question-cards");
const question_box = document.querySelector('.desktop-box');

question_cards.addEventListener('click', (event)=>{
    if (event.target.className === "question"){
        event.target.parentNode.classList.toggle("active");
    }
})

question_cards.addEventListener('mouseover', (event)=>{
    if (event.target.className === "question"){
        question_box.style.left = "-130px";
    }
})

question_cards.addEventListener('mouseout', (event)=>{
    if (event.target.className === "question"){
        question_box.style.left = "-100px";
    }
})