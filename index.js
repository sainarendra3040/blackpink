let countEl1 = document.getElementById("count1-el")
let countEl2 = document.getElementById("count2-el")
let count1 = 0
let count2 = 0

function add1() {
    count1 += 1
    countEl1.innerText = count1
}
function add2() {
    count1 += 4
    countEl1.innerText = count1
}
function add3() {
    count1 += 6
    countEl1.innerText = count1
}

function adda() {
    count2 += 1
    countEl2.innerText = count2
}
function addb() {
    count2 += 4
    countEl2.innerText = count2
}
function addc() {
    count2 += 6
    countEl2.innerText = count2
}