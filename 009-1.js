var hometown = [
    {name: '남준', place: '일산', city: '고양'},
    {name: '진', place: '과천'},
    {name: '상혁', place: '천안', city: '충청남도'},
    {name: '지민', place: '부산', city: '경상도'}
];

for (var i=0; i< hometown.length; i++) {
    var h = hometown[i];
    if (!h || !h.city) continue;

    console.log(i + ' 번째 실행입니다.');

    if (h.name === '상혁') {//hometown에서 name이 '상혁'인 경우 반복문을 break 하며 console.log의 내용을 나타낸다.
        console.log(h.name + '의 고향은 ' + h.city + '' + h.place + ' 입니다.');
        break;
    }
}