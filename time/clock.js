const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const calcDegrees = (time, max) => ((time / max) * 360) + 90;

    // Call function once every second
    setInterval(() => {
        // Create new Date object
        const now = new Date();
        // Get current seconds, minutes, & hours and calculate the degree shift
        const
            secondHandDegrees = calcDegrees(now.getSeconds(), 60),
            minuteHandDegrees = calcDegrees(now.getMinutes(), 60),
            hourHandDegrees = calcDegrees(now.getHours(), 12) + 180;
        // Apply rotation to the clock hands corresponding with current time value
        secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
        hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
        }, 1000); // 1000ms === 1s