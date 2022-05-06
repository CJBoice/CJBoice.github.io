//ball element
const ball = document.querySelector('#ball');
const ballDiameter = 20;
const ballRadius = 10;

//ball
let ballData = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
    angle: 180,
    velocity: 10
}

//other variables
const maxBounceAngle = 55;

//Movement of the ball
function moveBall() {
    ballData = getBallMovement(ballData);

    ball.style.top = ballData.y.toString() + 'px';
    ball.style.left = ballData.x.toString() + 'px';
}

function getBallMovement(tempBall){
    //find radian angle
    tempBall.angle = angleOverlap(tempBall.angle);
    let radAngle = tempBall.angle * (Math.PI / 180);

    //store first ball
    let firstTempBall = {
        x: tempBall.x,
        y: tempBall.y,
        angle: tempBall.angle,
        velocity: tempBall.velocity 
    };

    //move ball along vector
    tempBall.x += Math.cos(radAngle) * tempBall.velocity;
    tempBall.y += Math.sin(radAngle) * tempBall.velocity;

    //detect collisions
    tempBall = ballVectorCollision(firstTempBall, tempBall, radAngle);

    //return object
    return tempBall;
}

//handle the ball passing through the paddle if too fast
function ballVectorCollision(firstBall, secondBall, mRadAngle){
    //create ball object to return
    let mTempBall = secondBall;
    
    //detect direction of ball
    if(firstBall.x < secondBall.x){
        direction = true;
        //determine if the vector goes through the paddle 
        if((((firstBall.x + ballDiameter) <= paddle2.x) && ((secondBall.x + ballDiameter) >= (paddle2.x + 15))) 
            || (((firstBall.x + ballDiameter) <= paddle2.x) && (((secondBall.x + ballDiameter) <= (paddle2.x + 15)) && ((secondBall.x + ballDiameter) >= paddle2.x)))){
                //Dont let the ball get past paddle
                let xOffset1 = paddle2.x - (firstBall.x + ballDiameter);
                let xCord1 = firstBall.x + xOffset1;
                let yOffset1 = Math.tan(mRadAngle) * xOffset1;
                let yCord1 = firstBall.y - yOffset1;

                if(((yCord1 + ballDiameter) >= paddle2.y) && (yCord1 <= (paddle2.y + 120))){
                    //set the coordinates
                    mTempBall.x = xCord1;
                    mTempBall.y = yCord1;

                    //change as a result of collisions
                    mTempBall.angle = paddle2LerpAngle(yCord1);
                    mTempBall.velocity += 1;
                }
        }else if((((firstBall.x + ballDiameter) >= paddle2.x && (firstBall.x + ballDiameter) <= paddle2.x + 15) && (secondBall.x + ballDiameter) <= (paddle2.x + 15))
            || (((firstBall.x + ballDiameter) >= paddle2.x && (firstBall.x + ballDiameter) <= paddle2.x + 15) && (secondBall.x + ballDiameter) >= (paddle2.x + 15))){
                //If within Paddle
                if(((secondBall.y + ballDiameter) >= paddle2.y) && (secondBall.y <= (paddle2.y + 120))){
                    //set the coordinates
                    mTempBall.x = paddle2.x + ballDiameter;

                    //change as a result of collisions
                    mTempBall.angle = paddle2LerpAngle(mTempBall.y);
                    mTempBall.velocity += 1;
                }  
        }
    } else {  
        //determine if the vector goes through the paddle     
        direction = false;
        if(((firstBall.x >= (paddle1.x + 15)) && ((secondBall.x + ballDiameter) <= paddle1.x)) 
            || ((firstBall.x >= (paddle1.x + 15)) && (((secondBall.x + ballDiameter) >= paddle1.x) && (secondBall.x <= (paddle1.x + 15))))){
                //Dont let get past 
                let xOffset2 = firstBall.x - (paddle1.x + 15);
                let xCord2 = firstBall.x - xOffset2;
                let yOffset2 = Math.tan(mRadAngle) * xOffset2;
                let yCord2 = firstBall.y - yOffset2;


                if(((yCord2 + ballDiameter) >= paddle1.y) && (yCord2 <= (paddle1.y + 120))){
                    //set the coordinates
                    mTempBall.x = xCord2;
                    mTempBall.y = yCord2;

                    //change as a result of collisions
                    mTempBall.angle = paddle1LerpAngle(yCord2);
                    mTempBall.velocity += 1;
                }
        }else if(((firstBall.x >= (paddle1.x + 15) && firstBall.x <= paddle1.x) && (secondBall.x <= (paddle1.x + 15)))
            || ((firstBall.x >= (paddle1.x + 15) && firstBall.x <= paddle1.x) && (secondBall.x >= (paddle2.x + 15)))){
                //If within Paddle
                if(((secondBall.y + ballDiameter) >= paddle1.y) && (secondBall.y <= (paddle1.y + 120))){
                    //set the coordinates
                    mTempBall.x = paddle1.x + 15;

                    //change as a result of collisions
                    mTempBall.angle = paddle1LerpAngle(mTempBall.y);
                    mTempBall.velocity += 1;
                }

        }
    }

    //handle y collisions
    if((secondBall.y + ballDiameter) > window.innerHeight){
        mTempBall.angle *= -1;
        mTempBall.y = window.innerHeight - 20;
    }
    if(secondBall.y < 0){
        mTempBall.angle *= -1;
        mTempBall.y = 0;
    }

    return mTempBall;
}

//get lerp angle on paddles
function paddle1LerpAngle(y){
    let ballOffsetPercent = (y - paddle1.y) / 120;
    let lerpAngle = -maxBounceAngle + ((maxBounceAngle * 2) * ballOffsetPercent);

    return lerpAngle;
}

function paddle2LerpAngle(y){
    let ballOffsetPercent = (y - paddle2.y) / 120;
    let lerpAngle = (-maxBounceAngle + ((maxBounceAngle * 2) * ballOffsetPercent)) + 180;

    return -lerpAngle;
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