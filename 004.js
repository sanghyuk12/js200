//자료형 이해하기 + 배열 내용 추가 함수
var x = 5;//숫자형(number)
var y = 'five';// 문자형(String)
var isTrue = true;// 불린형(boolean)
var empty = null;// null (빈값)
var nothing //undefined  (존재하지 않는 값)
var sym = Symbol('me');//Symbol 변경 불가한 원시 자료형 ES6부터 새롭게 추가됨 참조형의 key로도 사용 가능

var item = {
    price: 5000,//key:value형태로 이루어져 있어야 한다. 키는 자료형이여야하며 키를 통해 해당 속성에 매핑된 값에 접근 가능
    count: 10
};//객체

var fruits = ['apple', 'orange', 'kiwi']; //배열
var addFruit = function (fruit) {
    fruits.push(fruit);
}//함수
addFruit('watermelon');
console.log(fruits);