// # 6.1 BackGround
const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

//JS에서 HTML 태그 생성, 그러나 아직 document에 들어가진 않았다.
//const bgImage = document.createElement("img");
//bgImage.src = `images/${chosenImage}`;

//document.body.appendChild(bgImage);

const body = document.querySelector("body")
body.style.backgroundImage = `url(images/${chosenImage})`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundPosition = "center";
body.style.backgroundSize = "100% 100%";