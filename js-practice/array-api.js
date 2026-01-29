'use strict';


/* 배열 요소를 문자열 한번에 나열하기 */
{
    const fruits = ['apple', 'banana', 'orange'];

    const result = fruits.join(" ");
    console.log(result);

    // let result = '';
    // for (let fruit of fruits) {
    //     result += fruit + ' ';
    // }
}


/* 문자열을 배열로 묶기 */
{
    const fruits = 'a, b, c, d';
    // 첫번째 값은 구분 인자, 두번째 값은 나타낼 개수 제한(선택)
    const arr = fruits.split(', ', 2);
    console.log(arr);
}


/* 문자열 거꾸로 뒤집기 */
{
    const array = [1,2,3,4,5];
    array.reverse();
    console.log(array);
}


/* 일정 요소들을 새로운 배열로 만들기 */
{
    const array = [1,2,3,4,5];
    const result = array.slice(2, 5);  // 시작인덱스, 끝인덱스
    console.log(result);

    // splice는 삭제로 기존 배열을 변형시킨 것
    // array.splice(0, 2);
    // console.log(array);
}


/* 배열 내 어느 조건의 요소를 찾기 (앞에서부터 조회하여 하나 찾기) */
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 65),
    new Student('C', 30, true, 95),
    new Student('D', 40, false, 93),
    new Student('E', 18, true, 88)
];

// 앞에서부터 조회하므로 조건에 해당될 때의 값이 반환되므로 
// 뒤에 조건에 충족하는 요소가 있어도 하나의 값만 나온다.
{
    const result = students.find((student) => student.score >= 90);
    // const result = students.find(function (student, index) {
    //     return student.score >= 90;
    // });
    console.log(result);
}


/* 일정 조건에 충족되는 요소로만 배열 구성 */
{
    const result = students.filter((student) => student.enrolled == true);
    console.log(result);
}


/* 배열 내부 클래스의 어느 필드의 값만 배열로 구성 */
{
    // map은 기존 배열을 변형해서 새로운 배열로 만들어주는 것
    const result = students.map((student) => student.score * 2);
    console.log(result);
}


/* 콜백 함수의 반환 값이 true가 있는지 없는지 파악해주는 함수 */
{
    // some은 모두 조회하면서 하나라도 true이면 true
    const result = students.some((student) => student.score < 50);
    console.log(result);

    // every는 모두 true여야 true
    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
}

/* 이전 값과 누적 값을 구성하며 배열을 돌면서 누적하는 함수 */
{
    // prev는 이전에 리턴된 값 / currenct는 현재 요소 / , 0은 시작 값
     const result = students.reduce((prev, current) => prev + current.score, 0);
    // const result = students.reduce((prev, current) => {
    //     return prev + current.score;
    // }, 0);
    console.log(result / students.length);

    // reduceRight는 거꾸로 진행

    // let result = 0;
    // students.forEach((student) => result += student.score);
    // console.log(result / students.length);
}


/* 메소드 체이닝 -> 새로 변환하여 배열 적용 + 정렬 + 문자열로 한번에 나열하기  */
{
    const result = students
                    .map((student) => student.score)
                    .sort()
                    .join(', ');
    console.log(result);
}