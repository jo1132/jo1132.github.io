// # 6.0 Quotes
const quotes = [
    {
        quote: "아마도 사랑할 때 우리가 경험하는 감정은 우리가 정상임을 보여준다. 사랑은 스스로 어떤 사람이 되어야 하는지를 보여준다.",
        author: "안톤 체홉 Anton Chekhov",
    },
    {
        quote: "결코 겁을 낸 적이 없다고 감히 떠벌리는 자는 겁쟁이일 뿐이다.",
        author: "페르디낭 포슈 Ferdinand Foch",
    },
    {
        quote: "경영대학원은 단순한 행동보다 어렵고 복잡한 행동을 가르치지만, 단순한 행동이 보다 효과적이다.",
        author: "워런 버핏 Warren Buffett",
    },
    {
        quote: "웃음의 절정은 우주를 새로운 가능성의 만화경속으로 내던진다.",
        author: "진 휴스턴 Jean Houston",
    },
    {
        quote: "가난은 인격의 스승이다.",
        author: "안티파네스",
    },
    {
        quote: "이상은 별과 같다. 손으로 만지지는 못하지만 망망대해의 항해자처럼 그것을 길잡이로 삼아 따라가면 운명에 도달한다.",
        author: "카를 슈르츠",
    },
    {
        quote: "벗이 먼 곳에서 찾아오면 또한 즐겁지 아니한가 (有朋自遠方來 不亦樂乎 / 유붕자원방래 불역락호)",
        author: "공자",
    },
    {
        quote: "진실은 언제나 두 개의 반쪽 진실들로 이루어져 있는데, 너는 결코 진실에 도달할 수 없다. 언제나 그 이상의 무엇인가가 있기 때문이다.",
        author: "톰 스토파드",
    },
    {
        quote: "남자는 엄격히 대하면 대부분의 일을 할 수 있도록 훈련 가능한 가축과도 같다.",
        author: "질리 쿠퍼",
    },
    {
        quote: "사람들은 늘 변화를 두려워한다. 전기가 발명되었을 때도 두려워하지 않았나? 석탄도 두려워했고, 가스엔진도 두려워했다. 사람들은 언제나 무지할 것이고, 바로 이러한 무지가 두려움이 된다. 하지만 시간이 지남에 따라 사람들은 최첨단 기술 전문가들을 받아들이게 될 것이다.",
        author: "빌 게이츠",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
/*
console.log(quotes[0]);

//random넘버생성
const rannum = Math.random()*10;
console.log(rannum);
//소수점 삭제하기
//round (반올림)
console.log(Math.round(rannum))
//ceil (올림)
console.log(Math.ceil(rannum));
//floor (내림)
console.log(Math.floor(rannum));
*/

// 리스트의 길이를 출력해준다.
//console.log(quotes.length);
const rannum = Math.floor(Math.random()*quotes.length);

//console.log(quotes[rannum]);
const todaysQuote = quotes[rannum];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;