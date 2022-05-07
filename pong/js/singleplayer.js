const helpBall = document.getElementById("help-ball");

let setTarget = 0;
let hasTarget = false;
let direction = false;

//move paddles
function moveSPaddles() {

    //player 1 paddle
    if(keys.w || keys.upArrow){
        if(keys.shift){
            paddle1.y -= paddle1.velocity + 10;
        } else {
            paddle1.y -= paddle1.velocity;
        }
    }
    if(keys.s || keys.downArrow){
        if(keys.shift){
            paddle1.y += paddle1.velocity + 10;
        } else {
            paddle1.y += paddle1.velocity;
        }
    }

    //player 2 paddle
    aiPaddle();
    helpPaddle();

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

function aiPaddle(){
    //variables
    let standardY = (window.innerHeight / 2) - 60;

    //find set target
    if(direction && setTarget === 0){
        let ball2 = {
            x: ballData.x,
            y: ballData.y,
            angle: ballData.angle,
            velocity: ballData.velocity
        };

        //create second ball to predict wehre to go
        while ((ball2.x + ballDiameter) < paddle2.x){
            ball2 = getBallMovement(ball2);
        }

        //set variables to go to
        let tolerance = Math.random() * 20;
        setTarget = ball2.y - 60 - tolerance;
    }

    //move towards angle
    if(direction){
        if(Math.abs(paddle2.y - setTarget) >= 10){
            if(paddle2.y > setTarget){
                paddle2.y -= paddle2.velocity; 
            } else if(paddle2.y < setTarget){
                paddle2.y += paddle2.velocity;
            } 
            else {
                paddle2.y = setTarget;
            }
        }
    } else {
        if(Math.abs(paddle2.y - standardY) >= 10){
            if(paddle2.y > standardY){
                paddle2.y -= paddle2.velocity; 
            } else if(paddle2.y < standardY){
                paddle2.y += paddle2.velocity;
            } else {
                paddle2.y = standardY;
            }
        }
    }

    if(direction === false){
        setTarget = 0;
    } 
}

function helpPaddle(){

    //find set target
    if(direction === false && hasTarget === false){
        let ball3 = {
            x: ballData.x,
            y: ballData.y,
            angle: ballData.angle,
            velocity: ballData.velocity
        };

        //create second ball to predict wehre to go
        while (ball3.x > paddle1.x + 15){
            ball3 = getBallMovement(ball3);
        }

        //set variables to go to
        hasTarget = true;
        helpBall.style.top = ball3.y.toString() + "px";
        helpBall.style.left = (paddle1.x  + 15).toString() + "px";
        helpBall.style.background = "green";
        
    }

    if(direction === true){
        helpBall.style.background = "black";
        hasTarget = false;
    } 
}
