//grab debug tags
const ballX = document.getElementById('Ballx');
const ballY = document.getElementById('Bally');
const paddle1x = document.getElementById('Paddle1x');
const paddle2x = document.getElementById('Paddle2x');
const paddle1y = document.getElementById('Paddle1y');
const paddle2y = document.getElementById('Paddle2y');
const ballAngle = document.getElementById('ballAngle');
const targetPosition = document.getElementById('targetPosition');


//display debug
function debug(){
    // ballX.innerHTML = Math.round(ballData.x * 100) / 100;
    // ballY.innerHTML = Math.round(ballData.y * 100) / 100;
    paddle1x.innerHTML = Math.round(paddle1.x * 100) / 100;
    paddle2x.innerHTML = Math.round(paddle2.x * 100) / 100;
    paddle1y.innerHTML = Math.round(paddle1.y * 100) / 100;
    paddle2y.innerHTML = Math.round(paddle2.y * 100) / 100;
    ballAngle.innerHTML = Math.round(ballData.angle * 100) / 100;
    // targetPosition.innerHTML = Math.round(setTarget * 100) / 100;
    // targetPosition.innerHTML = direction;


}