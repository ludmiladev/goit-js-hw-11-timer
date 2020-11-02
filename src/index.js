import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
]

let backgroundInterval = null;

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

start.addEventListener('click', onColorSwitchStart);
stop.addEventListener('click', OnColorSwichStop);

stop.disabled = true;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function bacgroundSwich() {
    return body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]

};

function onColorSwitchStart() {
    backgroundInterval = setInterval(bacgroundSwich, 1000);

    stop.disabled = false;
    start.disabled = true;
};

function OnColorSwichStop() {
    clearInterval(backgroundInterval);

    stop.disabled = true;
    start.disabled = false;

}