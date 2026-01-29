'use strict';

// Object 적용 전
// 필드가 늘어날 수록 관리하기 어려워짐
const name = 'kyk';
const age = 4;
function print(name, age) {
    console.log(name);
    console.log(age);
}
print(name, age);

// Object 적용 후
const person = { name: 'kyk', age: 29 };
function print2(person) {
    console.log(`person.name ${person.name}`);
    console.log(`person.age ${person.age}`);
}

// Object 선언 방식 2가지
// 1. {} 선언 방식(Object literal)
const obj1 = {};
// 2. new 키워드 선언 방식(Object constructor)
const obj2 = new Object();


// 자바스크립트 특성1
// 뒤 늦게 필드를 넣는 코드 적용 가능하지만 유지보수 문제가 있어 자제
person.hasJob = true;

// 자바스크립트 특성2
// 필드 삭제도 가능
delete person.hasJob;


/* 프로퍼티 접근법 2가지 */
// 1 . 활용 방식 : 키 값을 받아오고 싶을 때 사용 (주로 사용)
console.log(`person.name    -> ${person.name}`);

// 2 배열 + ' ' 씌워주는 방식 : 정확한 어떤 키가 필요한지 모르고 Runtime 마다 다르게 불러와야할 경우 사용
console.log(`person['name'] -> ${person['name']}`);
// ex) 인자가 어떤 값이 받아올지 모르기 때문에 .이 아닌 []로 불러와야함
function printValue(obj, key) {
    console.log(`obj[key] ${obj[key]}`);
}
printValue(person, 'name');


// Property value shorthand
const person1 = { name: 'bob', age:1 };
const person2 = { name: 'steve', age:2 };
const person3 = { name: 'dave', age:3 };
const person4 = makePerson('asd', 30);

function makePerson(name, age) {
    return {
        name: name,
        age             // key와 value 명이 동일하면 key: 생략가능
    };
}

console.log(person4);

// 순수하게 객체 생성 함수명은 첫번째 대문자 + return 없이 this.필드명으로 구성
// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}


/* in 연산자 */
console.log(`'name' in person ${'name' in person}`);
console.log(`'age' in person ${'age' in person}`);
console.log(`'a' in person ${'a' in person}`);


/* for..in vs for..of */
// for (key in obj)
for (let key in person) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,4,5];
for (let value of array) {
    console.log(value);    
}


/* cloning */
const user = { name: 'kyk', age: '20' };
const user2 = user; // user의 참조값을 받아 공통 접근
user2.name = 'coder';
console.log(user);

// clone = 필드 값만 그대로 복사하고 새로 생성하는 것
// 옛날 방식
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

// 최근 방식
const user4 = Object.assign({}, user);
console.log(user4);

// 여러 개를 덮어씌우며 복사하는 예시
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size);  // big