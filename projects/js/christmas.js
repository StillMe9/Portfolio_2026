const clock = document.querySelector("span#clock");

const secondCalc = 1000;
const minuteCalc = 1000 * 60;
const hourCalc = 1000 * 60 * 60;
const dayCalc = 1000 * 60 * 60 * 24;


function christmasClock() {
    const today = new Date();

    const todayYear = today.getFullYear();

    const christmas = new Date(todayYear, 11, 25);

    const dDay = christmas - today;

    const leftDate = Math.floor(dDay / dayCalc); 
    const leftHour = String(Math.floor((dDay % dayCalc) / hourCalc)).padStart(2, "0");
    const leftMinute = String(Math.floor((dDay % hourCalc) / minuteCalc)).padStart(2, "0");
    const leftSecond = String(Math.floor((dDay % minuteCalc) / secondCalc)).padStart(2, "0");

    clock.innerText = `${leftDate}일 ${leftHour}시간 ${leftMinute}분 ${leftSecond}초`;
    
}

christmasClock();
setInterval(christmasClock, 1000);