const menuBtn = document.querySelector('#menu-btn')

const hiddenMenu = document.querySelector('.modal-container')

const closeBtn = document.querySelector('[data-id="close-btn"]')

const popularLiEl = document.querySelector('#popular')

const popularArray = ['https://www.youtube.com/watch?v=I77mjesUbkw','https://www.youtube.com/watch?v=LYU-8IFcDPw','https://www.youtube.com/watch?v=SBjQ9tuuTJQ','https://www.youtube.com/watch?v=XPkZ9lmB8xY','https://www.youtube.com/watch?v=fV4DiAyExN0','https://www.youtube.com/watch?v=3eEA6H_y1VI','https://www.youtube.com/watch?v=6fVE8kSM43I','https://www.youtube.com/watch?v=s1tAYmMjLdY']




function changeAtt() {

    let randomNum = Math.floor(Math.random() * popularArray.length);
    let randomIndex = popularArray[randomNum];
    console.log('Enjoy')
    return popularLiEl.setAttribute("href",`${randomIndex}`)

}
popularLiEl.addEventListener('click',changeAtt)



menuBtn.addEventListener('click',function(){
    console.log('Click')
    hiddenMenu.classList.toggle('hidden')
})

closeBtn.addEventListener('click',() => {
    hiddenMenu.classList.toggle('hidden')
})

window.addEventListener('click',(event) => {
    if(event.target === hiddenMenu) {
        hiddenMenu.classList.toggle('hidden')
        
    }
})