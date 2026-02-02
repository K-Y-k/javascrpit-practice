`use strict`;


const views = 9744642;

/* 숫자 포맷팅 */
// 각 나라에 따른 숫자 포맷팅
const formatter1 = new Intl.NumberFormat('en');
console.log(formatter1.format(views)); // 9,744,642

// 요약 되도록 설정
const formatter2 = new Intl.NumberFormat('en', {
    notation: 'compact',
});
console.log(formatter2.format(views)); // 9.7M

// 단위 길게 풀어서 설정
const formatter3 = new Intl.NumberFormat('en', {
    notation: 'compact',
    compactDisplay: 'long',
});
console.log(formatter3.format(views)); // 9.7 million

// 사용자가 설정한 언어에 따른 포맷팅
const formatter4 = new Intl.NumberFormat(navigator.language, {
    notation: 'compact',
});
console.log(formatter4.format(views)); // 974만


/* 가격 단위 포맷팅 */
const price = 10000;

// 한국
const formatter5 = new Intl.NumberFormat('ko', {
    style: 'currency',
    currency: 'krw',     // 한국 원화
    notation: 'compact', // 간결하게
});
console.log(formatter5.format(price)); // ₩1만

// 미국
const formatter6 = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'usd',
    notation: 'compact',
});
console.log(formatter6.format(price)); // $10K


/* 상대 시간 나타내기 */
// Intl 객체 활용
const formatter7 = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',  // 'auto'는 어제, 오늘, 내일 등으로 표시
});

console.log(formatter7.format(1, 'day'));   // tomorrow
console.log(formatter7.format(2, 'hour'));  // in 2 hours
console.log(formatter7.format(-1, 'day'));  // yesterday
console.log(formatter7.format(-2, 'day'));  // 2 days ago

// 여기서는 날짜 단위를 하나로 밖에 지정 못하는 문제
const today = new Date();
const started = new Date('2019, 10, 12');
const daysPassed = Math.ceil((started - today) / (1000 * 60 * 60 * 24));
console.log(
    `시작일: ${formatter7.format(daysPassed, 'day')}`
); //  시작일: 2,303 days ago


const date = new Date(2019, 10, 12);
date.toString(); // "Tue Nov 12 2019 00:00:00 GMT+0900 (한국 표준시)"

// console.log(new Intl.DateTimeFormat('en').format(date)); // "11/12/2019"
// console.log(new Intl.DateTimeFormat('ko').format(date)) // "2019. 11. 12."
// console.log(new Intl.DateTimeFormat('de').format(date)); // "12.11.2019"
// console.log(new Intl.DateTimeFormat('zh').format(date)); // "2019/11/12"

// 위처럼 말고 간편하게 포맷팅 가능
console.log(date.toLocaleDateString('en')); // "11/12/2019"
console.log(date.toLocaleString('en', {
    dateStyle: 'full',
    timeStyle: 'long',
})); // Tuesday, November 12, 2019 at 12:00:00 AM GMT+9

console.log(date.toLocaleString('ko', {
    // 단위 세부 조정
    minute: 'numeric',
    hour: 'numeric',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'long',
})); // 2019년 11월 12일 화요일 오전 12:00


/* 유용한 상대적 시간 표기 라이브러리 */
// moment.js 라이브러리: 포맷과 상대 날짜 포맷 기능을 다양한 언어로 지원
// timeago.js 라이브러리: 간단한 표기만 사용할 경우 좋음
