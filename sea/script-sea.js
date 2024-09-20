//минуты
const timer = 5;
//общее время в секундах
let amountTime = timer * 60;

function calculateTime() {
    const countdown = document.querySelector(".countdown");
    let minutes = Math.floor(amountTime / 60); //общее время делим на 1мин(в сек)300/60
    let seconds = amountTime % 60; //сколько остаток секунд из общего времени
    //если секунд остаеться < 10, то подставляеться о, чтобы смотрелось 0:09
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    //отразить отсчет времени 
    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;
    //если общее время меньше 0, то запускаеться функция остановки времени и на экране пишется 0
    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
    }
    //функция как только остановиться время, то сотреться время
    function stopTimer() {
        clearInterval(myTimer);
    }
};
//переменная мой таймер вызывает функцию раз в 1сек(1000мсек)
let myTimer = setInterval(calculateTime, 1000);

const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", function() {
    document.querySelector("#myVideo").play();
    document.querySelector("#player").play();
})