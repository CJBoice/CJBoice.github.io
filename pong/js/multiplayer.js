//Player's Paddles
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

//Paddle Information
let paddle1 = {
    x: (.1 * window.innerWidth),
    y: (.5 * window.innerHeight) - 60,
    velocity: 10
};

let paddle2 = {
    x: .9 * window.innerWidth,
    y: (.5 * window.innerHeight) - 60,
    velocity: 10
}

//move players
function moveMPaddles() {

    //player 1 paddle
    if(keys.w){
        if(keys.shift){
            paddle1.y -= paddle1.velocity + 10;
        } else {
            paddle1.y -= paddle1.velocity;
        }
    }
    if(keys.s){
        if(keys.shift){
            paddle1.y += paddle1.velocity + 10;
        } else {
            paddle1.y += paddle1.velocity;
        }
    }

    //player 2 paddle
    if(keys.upArrow){
        paddle2.y -= paddle1.velocity;
    }
    if(keys.downArrow){
        paddle2.y += paddle1.velocity;
    }

    //player 1 collisions
    if(paddle1.y > window.innerHeight - 120){
        paddle1.y = window.innerHeight - 120;
    }
    if(paddle1.y < 0){
        paddle1.y = 0;
    }

    //player 2 collisions
    if(paddle2.y > window.innerHeight - 120){
        paddle2.y = window.innerHeight - 120;
    }
    if(paddle2.y < 0){
        paddle2.y = 0;
    }

    player1.style.top = paddle1.y.toString() + 'px';
    player2.style.top = paddle2.y.toString() + 'px';
}

