const adviceId = document.getElementById('adviceId')
const quote = document.getElementById('quote')
const diceBtn = document.querySelector('.diceBg')
let URL = 'https://api.adviceslip.com/advice'

window.addEventListener('DOMContentLoaded',()=>{
    fetchAPI()
})

async function fetchAPI(){
    const data = await fetch(URL)
    const result = await data.json()
    adviceId.innerText = result.slip.id
    quote.innerText = result.slip.advice
 
}


diceBtn.addEventListener('click',()=>{
    
    fetchAPI()
})