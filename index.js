let cards = []
let sum = 0
let hasWon = false
let alive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let resetEl = document.getElementById("reset-el")

function startGame(){
    let card1 = getRandomCard()
    let card2 = getRandomCard()
     cards = [card1,card2]
    sum = card1 + card2
    renderGame()
}



function getRandomCard (){
    let ramdomCard = Math.floor(Math.random()*6+1)
    return ramdomCard
}

function renderGame(){
    cardsEl.textContent = "Cards: "
     
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i]+","
    }
  
     sumEl.textContent = "sum:" + sum
    if (sum < 7){
        sumEl.textContent = "sum:" + sum
    message="draw an another number"
    alive = true
}
else if(sum === 7){
    message="you won , THALA FOR REASON !"
    hasWon = true
    
}
else {
    message="you lost!"
    alive = false
  
}
 messageEl.textContent = message
 
}



function newCard(){
    if(hasWon===false && alive === true){
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
 }
 
 
    
    

 
}

    
