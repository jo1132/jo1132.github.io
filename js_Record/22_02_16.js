// # 5.0 CLOCK
// # 5.1 Intervals
// # 5.2 PadStart


// interval : '매번' 일어나는 일, '매 2초' 등...
// Timeout : 일정시간 딜레이
const clock = document.querySelector("#clock");


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.textContent = (`${hours}:${minutes}:${seconds}`);
}

// 5000ms 마다 sayHello를 실행시킨다.
getClock() // 맨처음 대기없이 시간을 출력하기위해 한번 불러준다.
setInterval(getClock, 1000);

//setTime은 정해진 시간만큼 대기 후에 실행해준다.
//setTimeout(sayHello, 5000);