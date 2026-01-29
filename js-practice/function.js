'use strict';


/* function */
// 함수 기초 선언 방식
function printHello() {
    console.log('Hello');
}
printHello(); // 함수 호출

// 파라미터로 전달받아 처리하는 함수
function log(message) {
    console.log(message);
}
log('Hello@!');
log(1234);

// 객체 참조 값에 접근하여 내부 값 변경
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 파라미터에 기본 값을 지정하지 않은 경우
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // 파라미터가 빠지면 undefined가 된다.

// 파라미터에 기본 값을 지정한 경우
function showMessage2(message, from = `unknown`) {
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!'); // 빠져도 지정한 값이 된다.

// 나머지 파라미터
// ...을 붙이면 배열 형태로 전달받는다.
function printAll(...args) {
    // 방식1
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 방식2
    for (const arg of args) {
        console.log(arg);
    }

    // 방식3
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'kyk');

// 파라미터 값을 전달 받고 결과 반환
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);  // 3
console.log(`sum: ${sum(1, 2)}`);


/* 전역 변수, 지역 변수 */
let globalMessage = 'global';    // 전역 변수
function printMessage() {
    let message = 'hello';       // 지역 변수
    console.log(message);
    console.log(globalMessage);
}
printMessage();

function upgradeUser(user) {
    // 먼저 조건이 맞지 않은 경우 탈출하는 구조로 작성하는 것이 더 효율적
    if (user.point <= 10) {
        return;
    }

    // upgrade logic..
}


/* Function Expression */
const print = function() {         // 익명 함수 (이름 없이 할당하는 함수)
    console.log('print');
};
const print2 = function print() {  // named 함수 (이름이 있는 함수)
    console.log('print');
};
print();

const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


/* Call back Function */
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function() {
    console.log('yes!');
}
const printNo = function() {
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


/* Arrow Function */
const simplePrint = () => console.log('simplePrint!');
// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const add = (a, b) => a + b;
// const add = fucntion (a, b) {
//     return a + b;
// }


/* IIFE (Immediately Invoked Function Expression) */
(function hello() {
	console.log('IIFE');
})();


function calculate(command, a, b) {
    let result = 0;

    switch (command) {
        case 'add':
            result = a + b;
            break;
        case 'substract':
            result = a - b;
            break;
        case 'divide':
            result = a / b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'remainder':
            result = a % b;
            break;
        default:
            console.log('command error');
    }

    console.log(`function calculate() ${command} result = ${result}`);
    return result;
}

calculate('add', 6, 2);
calculate('substract', 6, 2);
calculate('divide', 6, 2);
calculate('multiply', 6, 2);
calculate('remainder', 6, 2);