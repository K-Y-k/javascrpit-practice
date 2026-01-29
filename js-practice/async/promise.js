`user strict`;


/* Producer */
// 선언한 순간 바로 실행
const promise = new Promise((resolve, reject) => {
    // 무거운 작업
    // 네트워크에서 데이터를 받아오거나 파일 같은 큰 데이터를 받는 것은 무겁기 때문
    // 데이터를 받아오는 동안 다른 코드를 실행하는 것이 효율적이므로
    // 시간이 조금 걸리는 일은 promise로 구현하는 것이 바람직하다.
    console.log('doing something..');

    setTimeout(() => {
       resolve('kyk');
        // reject(new Error('no network'));
    }, 2000);
});

/* Consumer */
// then, catch, finally 를 활용함
promise
.then((value) => { // 성공적으로 실행한 경우
   console.log(value); 
})
.catch((error => { // 실패한 경우
    console.log(error);
}))
.finally(() => {   // 성공/실패 여부 없이 무조건 실행하는 구문
    console.log('finally');
});



/* Promise Chaining */
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));



/* Error Handling */
const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`닭`), 1000);
});
const getEgg = hen => new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 달걀로 받음`), 1000);
    setTimeout(() => reject(new Error(`${hen} => 달걀로 받음`)), 1000);
});
const cook = egg => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란후라이 만들기`), 1000);
});


getHen()
.then(hen => getEgg(hen))
// .catch(error => {
//     return '빵';
// })
.then(egg => cook(egg))
.catch(error => {
    return '빵';
})
.then(meal => console.log(meal))
.catch(console.log);