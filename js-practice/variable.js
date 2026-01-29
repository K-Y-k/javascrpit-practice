'use strict';

// 2. variable
// 변경될 수 있는 값
// let 키워드 추가됨 (ES6)

let name = 'kyk';
console.log(name);
name = 'hello';
console.log(name);


// 전역 변수
let globalName = 'global name';
{
    // 지역 변수
    let name2 = 'kyk';
    console.log(name2);
    name2 = 'hello';
    console.log(name2);
    console.log(globalName);
}
// console.log(name2); 에러
console.log(globalName);


// var 키워드는 hoisting 문제로 사용하지 않는다.
asd = 1;
var asd;


// Constant
const daysInWeek = 7;
const maxNumber = 5;

// variable types
let count = 1;
const size = 17.1;

// dom 요소를 자바스크립트로 position 등의 다양한 계산을 할 때 
// 숫자인지 확인하지 않고 연산해버리면 나올 수 있는 숫자들
// 1.무한대 값
const infinity = 1 / 0;
// 2.음의 무한대 값
const negativeInfinity = -1 / 0;
// 3.유효하지 않는 값
const na = 'not a number' / 2;

// 최근에 bigInt 추가됨
const bigInt = 123456789012345678901234567890123456789n;

// String 타입: 1개, 여러개 모두 통일됨
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`vale: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   // false, 고유한 식별자이므로
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true, Symbol.for() 은 주어진 string을 기준의 식별자라 같음
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const kyk = { name: 'kyk', age: 20 };
kyk.age = 21;

// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);