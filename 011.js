//반복문 while
var hometown = [
    {name: '남준', place: '일산', city: '고양'},
    {name: '진', place:'gg', city: '과천'},
    {name: '상혁', place: '천안', city: '충청남도'},
    {name: '지민', place: '부산', city: '경상도'}
];

var isHometown = function(h, name) {
    console.log(`함수가 실행되었습니다. ${h.city}에서 ${name}을 찾습니다.`);

    if (h.name === name) {
        console.log(`${h.name}의 고향은 ${h.city} ${h.place} 입니다.`);
        return true;
    }
    return false;
}

var h;
while (h = hometown.shift()) { //shift는 배열의 앞에서부터 값을 하나씩 뺴내오는 함수
    if (!h.name || !h.place || !h.city) continue;

    var result = isHometown(h, '상혁');
    if (result) break; // result값이 일치한 경우 while문을 종료
}

var i = 0; //빈 배열이 된 hometown의 값을 새로 채워 넣을 준비
var names = ['남준','상혁', '윤기', '호섭'];
var cities = ['경기','충청', '대구', '광주'];
do {
    hometown[i] = {name: names[i], city: cities[i]};
    i++;
} while (i < 4);

console.log(hometown);