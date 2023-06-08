let homeResult = document.getElementById("home-result")
let awayResult = document.getElementById("away-result")
let awayPoint = 0
let homePoint = 0

function plusHomeOne() {
    homePoint += 1
    homeResult.textContent = homePoint
}

function plusHomeTwo() { 
    homePoint += 2
    homeResult.textContent = homePoint 
}

function plusHomeThree() {
    homePoint += 3
    homeResult.textContent = homePoint   
}

function restHome() {
    point = 0
    homeResult.textContent = point  
}

function plusAwayOne() {
    awayPoint += 1
    awayResult.textContent = awayPoint
}

function plusAwayTwo() {
    awayPoint += 2
    awayResult.textContent = awayPoint   
}

function plusAwayThree() {
    awayPoint += 3
    awayResult.textContent = awayPoint  
}

function restAway() {
    awayPoint = 0
    awayResult.textContent = awayPoint
}