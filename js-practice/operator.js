'use strict';

/* 문자 연결 */ 
console.log('my' + 'cat');  // 문자열 이어주기
console.log('1' + 2);       // 숫자와 문자 조합은 문자가 된다.

console.log(`string literals: 
    ''''
    1 + 2 = ${1+2}`);       // ``로 작성된 string literals는 줄바꿈이 가능하고 ${}로 이어주기 가능하다.


console.log("kyk's \n\t book"); // 줄바꿈은 \n, 여백은 \t, '를 문자로 쓸거면 " "로 감싸주기


/* 숫자 연산 */
console.log(1 + 1);    // add
console.log(1 + 1);    // substract
console.log(1 + 1);    // divide
console.log(1 + 1);    // multiply
console.log(1 + 1);    // remainder
console.log(1 + 1);    // exponentiation


/* 증감 연산자 */ 
let counter = 2;
const preIncrement = ++counter;  // 전위 증가

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; // 후위 증가
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);


/* 할당 연산 */ 
let x = 3;
let y = 6;
x += y;    // -> x = x + y;
x -= y;
x *= y;
x /= y;


/* 비교 연산 */ 
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


/* 산술 연산   ||(or), &&(and), !(not) */
const value1 = false;
const value2 = 4 < 2;

function check() {
    for (let i = 0; i < 10; i++) {

        console.log('');
    }

    return false;
}

// 함수 호출은 제일 오래 걸리기 때문에 제일 뒤에 배치하는 것이 효율적이다.
console.log(`or: ${value1 || value2 || check()}`);  // true || false || check 함수
console.log(`and: ${value1 && value2 && check()}`);


// if (nullableObject != null) {
//     nullableObject.something;
// }
function check() {
    for (let i = 0; i < 10; i++) {
        console.log('holly');
    }
    return true;
}

console.log(!value1);


/* 동등 연산 */
const stringFive = '5';
const numberFive = 5;

// ==  (느슨한 비교: 타입이 달라도 변경해서 값 자체만 비교)
// 문자 5와 숫자 5 타입만 다르고 값 자체는 같으므로 true
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === (엄격한 비교: 타입과 값 자체 둘 다 비교)
// 문자 5와 숫자 5 타입이 다르므로 false
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// 객체 동등 비교
const kyk1 = { name: 'kyk' };
const kyk2 = { name: 'kyk' };
const kyk3 = kyk1;
console.log(`kyk1 == kyk2 ${kyk1 == kyk2}`);           // false (참조값이 다르므로)
console.log(`kyk1 === kyk2 ${kyk1 === kyk2}`);         // false (타입은 같지만 참조값이 다르므로)
console.log(`kyk1 == kyk3 ${kyk1 == kyk3}`);           // true  (참조값, 타입 모두 같으므로)
console.log(`kyk1 === kyk3 ${kyk1 === kyk3}`);         // true  (참조값, 타입 모두 같으므로)


/* if 연산 */
const name = 'kyk';
if (name === 'kyk') {
    console.log(`Welcome kyk!`);
} else if (name === 'coder') {
    console.log(`You are amazing coder`);
} else {
    console.log(`unknown`);
}


/* 삼항 연산 */
console.log(name === 'kyk' ? 'yes' : 'no');


/* Switch 구문 */
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you');
        break;
    case 'Firefox':
    case 'Bluefox':
        console.log('fire you');
        break;
    default:
        console.log('same all');
        break;
}


/* 반복문 */
// while 문
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while문
// 블록 내부를 최소 1회 실행하고자 한다면 사용
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

for (i = 3; i > 0; i--) {
	console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i=i-2) {
	console.log(`inline variable for: ${i}`);
}

// 이중 중첩 반복문
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// contiune
for (i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        continue;
    }

    console.log(`i: ${i}`);
}

// break
for (i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }

    console.log(`i: ${i}`);
}