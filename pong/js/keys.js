//remeber what keys are pressed
let keys = {
    upArrow: false,
    downArrow: false,
    w: false,
    s: false,
    shift: false
};

//detect key presses
window.addEventListener('keydown', function(e) {
    if(e.which === 38){
        keys.upArrow = true;
    }
    if(e.which === 40){
        keys.downArrow = true;
    }
    if(e.which === 87){
        keys.w = true;
    }
    if(e.which === 83){
        keys.s = true;
    }
    if(e.which === 16){
        keys.shift = true;
    }
});

//detect key releases
window.addEventListener('keyup', function (e) {
    if(e.which === 38){
        keys.upArrow = false;
    }
    if(e.which === 40){
        keys.downArrow = false;
    }
    if(e.which === 87){
        keys.w = false;
    }
    if(e.which === 83){
        keys.s = false;
    }
    if(e.which === 16){
        keys.shift = false;
    }
});