//ball
const ball = document.querySelector('#ball');
const ballDiameter = 20;

//ball
let ballData = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
    angle: 90,
    velocity: 10
}

//Movement of the ball
function ballMovement() {
    getBallMovement();
    ballCollisions();

    ball.style.top = ballData.y.toString() + 'px';
    ball.style.left = ballData.x.toString() + 'px';
}

//controlls all ball collisions
function ballCollisions() {
    //handles ball collsiions with paddles
    if(ballData.y >= paddle1.y && ballData.y <= (paddle1.y + 120)){
        if(ballData.x <= (paddle1.x + 15)){
            ballData.angle += 180;
        }
    }
    if(ballData.y >= paddle2.y && ballData.y <= (paddle2.y + 120)){
        if((ballData.x + ballDiameter) >= paddle2.x){
            ballData.angle += 180;
        }
    }

    //handle collsions with the screen
    if((ballData.y + ballDiameter) >= window.innerHeight){
        ballData.angle *= -1;
    }
    if(ballData.y <= 0){
        ballData.angle *= -1;
    }

}

function lerpAngle(){
    if(ballData.x <= (paddle1.x + 15)){
                
    }
}

//where is ball moving along angle
function getBallMovement(){
    let radAngle = (ballData.angle * (Math.PI / 180));

    ballData.x += Math.cos(radAngle) * ballData.velocity;
    ballData.y += Math.sin(radAngle) * ballData.velocity;
}

//ensure angle is within range
function angleOverlap(tempAngle){
    while(tempAngle < 0){
        tempAngle += 360;
    }
    while(tempAngle > 360){
        tempAngle -= 360;
    }

    return tempAngle;
}