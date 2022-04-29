//ball element
const ball = document.querySelector('#ball');
const ballRadius = 10;

//ball
let ballData = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
    angle: 180,
    velocity: 10
}

//other variables
const maxBounceAngle = 60;

//Movement of the ball
function moveBall() {
    getBallMovement();
    ballCollisions();

    ball.style.top = ballData.y.toString() + 'px';
    ball.style.left = ballData.x.toString() + 'px';
}

//controlls all ball collisions
function ballCollisions() {
    //handles ball collsiions with paddles
    if((ballData.y + ballRadius) >= paddle1.y && (ballData.y - ballRadius) <= (paddle1.y + 120)){
        if(((ballData.x - ballRadius) <= (paddle1.x + 15)) && (ballData.x >= paddle1.x)){
            paddle1LerpAngle();
            ballData.velocity += 1;
        }
    }
    if((ballData.y + ballRadius) >= paddle2.y && (ballData.y - ballRadius) <= (paddle2.y + 120)){
        if(((ballData.x + ballRadius) >= paddle2.x) && (ballData.x <= paddle2.x + 15)){
            paddle2LerpAngle();
            ballData.velocity += 1;
        }
    }

    //handle collsions with the screen
    if((ballData.y + ballRadius) >= window.innerHeight){
        ballData.angle *= -1;
    }
    if((ballData.y - ballRadius) <= 0){
        ballData.angle *= -1;
    }

}

//get lerp angle on paddles
function paddle1LerpAngle(){
    let ballOffsetPercent = (ballData.y - paddle1.y) / 120;
    let lerpAngle = -maxBounceAngle + ((maxBounceAngle * 2) * ballOffsetPercent);

    ballData.angle = lerpAngle;
}

function paddle2LerpAngle(){
    let ballOffsetPercent = (ballData.y - paddle2.y) / 120;
    let lerpAngle = (-maxBounceAngle + ((maxBounceAngle * 2) * ballOffsetPercent)) + 180;

    ballData.angle = -lerpAngle;
}

//where is ball moving along angle
function getBallMovement(){
    ballData.angle = angleOverlap(ballData.angle);
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