'use strict';


/* 배열 선언하기 */
// 1. new 키워드로 선언 방식
const arr1 = new Array();

// 2. []로 선언 방식
const arr2 = [1, 2];


/* Index Position */
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);


/* for 문으로 출력 */
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for of 방식
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// forEach 방식
fruits.forEach((fruit, index) => console.log(fruit, index));

// 뒤에 추가
fruits.push('c', 'd');
console.log(fruits);

// 앞에 추가
fruits.unshift('e', 'f');
console.log(fruits);

// 뒤에 삭제
fruits.pop();
fruits.pop();
console.log(fruits);

// 앞에 삭제
fruits.shift();
fruits.shift();
console.log(fruits);

// 주의점: 앞에 추가/삭제는 뒤에 추가/삭제보다 훨씬 느리다.
// 앞에는 기존 데이터를 모두 이동하기 때문


/* splice 메소드 */
fruits.push('orange', 'grape');
console.log(fruits);

// 첫인자 = 시작 위치, 두번째인자 = 지울 개수(지정 없으면 끝까지)
fruits.splice(2, 1);
console.log(fruits);

// 세번째 인자부터 지운 후 추가할 값들 
fruits.splice(2, 1, 'melon', 'strawberry');
console.log(fruits);


/* 배열 결합 */
const fruit2 = ['kiwi', 'cherry'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);


/* 검색 */
console.log(fruits.indexOf('banana'));
console.log(fruits.includes('banana'));


