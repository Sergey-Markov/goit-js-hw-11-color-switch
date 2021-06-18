
import  {colors}  from './src/colors.js';


const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action=start]'),
    stopBtn: document.querySelector('button[data-action=stop]')
};
refs.body.insertAdjacentHTML('afterbegin', `<p></p>`);
const pEl = document.querySelector('p');

let timeOut = null;


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);


function onStartClick(){
    if(timeOut === null){
        changeColor();
    };
        return;
};


function onStopClick(){
    clearTimeout(timeOut);
    timeOut = null;
    pEl.innerHTML = '';
};

function changeColor (){
    let randomIndex = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[randomIndex];
    timeOut = setTimeout(changeColor, 1000);
    console.log(timeOut);
    showTime();
};

function showTime (){
    let clock = new Date(),
        hour = clock.getHours(),
        min = clock.getMinutes(),
        seconds = clock.getSeconds();    
    pEl.innerHTML = `${addZero(hour)}<span>:<span>${addZero(min)}<span>:<span>${addZero(seconds)}`;
    function addZero (timeElement){
        return (parseInt(timeElement, 10) < 10 ? '0' : "") + timeElement;
    };
};
