var score = 0;
var userChoice = '';
const mainsection = document.getElementById('mainsection');
const resultsection = document.getElementById('resultsection');
const userPaper = document.getElementById('userPaper');
const userRock = document.getElementById('userRock');
const userScissors = document.getElementById('userScissors')
const computerPaper = document.getElementById('computerPaper');
const computerRock = document.getElementById('computerRock');
const results = document.getElementById('results');
const computerScissors = document.getElementById('computerScissors');
const rules = document.getElementById('rules')

paper = () => {
    userChoice = 1;
    playGame()
    resultMode()
    userPaper.classList.remove('hidden')
}


scissors = () => {
    userChoice = 2;
    resultMode()
    playGame()
    userScissors.classList.remove('hidden')
}


rock = () => {
    userChoice = 3;
    resultMode()
    playGame()
    userRock.classList.remove('hidden')
}



resultMode = () =>{
    resultsection.classList.remove('hidden')
    mainsection.classList.add('hidden')
}



playGame = () => {

    var computer = (Math.floor(Math.random() * 3)) + 1
   
    if (computer == 1 ){ 

        if( userChoice == 2){
            result = 'You win'
            scorePlus()
        } 
        
        else if( userChoice == 3){
            result= 'You loose'
            scoreMinus()
        } 

        else{
            result = 'Same choice'
        } 

        computerPaper.classList.remove('hidden')
    } 
    
    else if (computer == 2 ){ 

        if( userChoice == 3){
            result = 'You win'
            scorePlus()
        } 
        
        else if( userChoice == 1){
            result= 'You loose'
            scoreMinus()
        } 

        else{
            result = 'Same choice'
        } 

        computerScissors.classList.remove('hidden')
    } 
    

    else if (computer == 3 ){ 

        if( userChoice == 1){
            result = 'You win'
           scorePlus()
        } 
        
        else if( userChoice == 2){
            result= 'You loose'
            scoreMinus()
        } 

        else{
            result = 'Same choice'
        }

        computerRock.classList.remove('hidden')

    } 



    results.innerHTML = result;
}


scorePlus = () =>{
    score++
    localStorage.setItem("score", score);
    updateScore()
}


scoreMinus = () =>{
    score--
    if (score < 0){
        score = 0;
    }
    localStorage.setItem("score", score);
    updateScore()
}


updateScore = () =>{
    document.getElementById('point').innerHTML =  localStorage.getItem("score")

}

updateScore()



newGame = () =>{
    score = 0
    userRock.classList.add('hidden')
    userPaper.classList.add('hidden')
    userScissors.classList.add('hidden')
    computerScissors.classList.add('hidden')
    computerPaper.classList.add('hidden')
    computerRock.classList.add('hidden')

    resultsection.classList.add('hidden')
    mainsection.classList.remove('hidden')
    localStorage.setItem("score", score);
    updateScore()
}



playAgain =() =>{
    userRock.classList.add('hidden')
    userPaper.classList.add('hidden')
    userScissors.classList.add('hidden')
    computerScissors.classList.add('hidden')
    computerPaper.classList.add('hidden')
    computerRock.classList.add('hidden')

    resultsection.classList.add('hidden')
    mainsection.classList.remove('hidden')
   
}



showRules =() =>{
    rules.style.top='0'
}



closeRules =() =>{
    rules.style.top='110%'
}


