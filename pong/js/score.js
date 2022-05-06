//get score element
const score = document.getElementById("score");

//scores
let scores = {
    player1: 0,
    player2: 0
};

//death
let isPlayerOneDead = false;

//determines who lost rally
function handleScoring(){
    if(ballData.x <= 0){
        scores.player2 += 1;
        isPlayerOneDead = true;
        resetBall();
    }
    if((ballData.x + ballDiameter) >= window.innerWidth){
        scores.player1 += 1;
        isPlayerOneDead = false;
        resetBall();
    }

    printScore();
}

//resets all data to orignial states
function resetBall(){
    //ball info
    ballData.x = .5 * window.innerWidth;
    ballData.y = .5 * window.innerHeight;
    ballData.velocity = 10;
    if(isPlayerOneDead){
        ballData.angle = 180;
    } else {
        ballData.angle = 0;
    }

    //paddle info
    paddle1.y = (.5 * window.innerHeight) - 60
    paddle2.y = (.5 * window.innerHeight) - 60
    setTarget = 0;
}

function printScore(){
    score.style.left = .5 * window.innerWidth;
    score.innerHTML = scores.player1.toString() + "    " + scores.player2.toString();
}