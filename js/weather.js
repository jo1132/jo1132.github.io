const API_KEY = "f83546623d7c5f32f741bf7b04c2cf59";

function onGeoOK(position){

    //position으로 들어오는 정보들 중 좌표만 얻는다.
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    //사용할 API
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    //Fetch는 뭘까...
    fetch(url).then(Response => Response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const City = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        City.innerText = data.name;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

//브라우저에서 지원하는 좌표얻는 함수 (성공했을때의 실행될 함수, 실패했을때의 함수)
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);