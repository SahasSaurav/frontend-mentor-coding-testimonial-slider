const cardTanya=document.getElementById('card-tanya');
const cardJohn=document.getElementById('card-john');
const cardBtn=document.querySelectorAll('.card__btn');


cardBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        cardTanya.classList.toggle('slide');
        cardJohn.classList.toggle('slide');
        // img.classList.add('pop');
    })
})

