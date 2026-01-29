`use strict`;


/* async */
/* 비동기처리 적용 전 */
function fetchUser() {
    // 네트워크 요청 10초.. 정도 걸리는 코드

    return 'kyk';
}

// 여기서 비동기적인 처리를 하지 않으면
// 자바스크립트는 순차적인 동기적으로 처리하기 때문에 10초를 기다려야 하는 문제 발생
const user = fetchUser();
console.log(user);
console.log('--------------------------');

/* Promise 비동기처리 적용 후 */
function fetchUserPromise() {
    return new Promise((resolve, reject) => {
        // 네트워크 요청 10초.. 정도 걸리는 코드

        resolve('kyk');  // resolve로 반환하게 되면 fulfilled 상태로 되어 있다.
        // return 'kyk';    resolve로 반환하지 않으면 pending 상태로 되어 있다.
    });
}

const user2 = fetchUserPromise();
user2.then(a => console.log(a));
console.log(user2);
console.log('--------------------------');

/* async 비동기처리 적용 후 */
// async 키워드만 붙이면 내부 코드가 Promise로 변환되면서 반환한다.
async function fetchUserAsync() {
    // 네트워크 요청 10초.. 정도 걸리는 코드

    return 'kyk';
}

const user3 = fetchUserAsync();
user3.then(a => console.log(a));
console.log(user3);


/* await */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    // 순차적으로 작성하기 편함
    await delay(1000);
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

/* Promise로 적용 버전 */
// 체이닝 불편함 발생
function getBananaPromise() {
    return delay(1000)
    .then(() => 'banana');
}

// Promise도 체이닝이 길어지면 Callback 지옥처럼 문제 발생
function pickFruitsPromise() {
    return getApple()
    .then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}


/* 병렬 처리법 */
// 생성과 동기화를 각각 작성한다. (즉, 비효율 방식)
async function pickFruits() {
    try {
        // Promise로 생성 후
        const applePromise = getApple();
        const bananaPromise = getBanana();

        // await 키워드로 동기화
        const apple = await applePromise;
        const banana = await bananaPromise;
        return `${apple} + ${banana}`;
    } catch (error) {
    }
}
pickFruits().then(fruits => console.log(fruits));


// 유용한 Promise API 적용 방식
// - Promise.all()
//   해당 Promise들이 모두 병렬적으로 받아질 때까지 모아둔다.
//   다 받아지면 다 받아진 배열이 전달 받는다.
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(fruits => console.log(fruits));


// - Promise.race()
//   배열에 전달된 Promise들 중 가장 먼저 return되는 하나의 Promise만 전달된다. 
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(fruit => console.log(fruit));



/* async await을 활용하여 기존 Promise Refactoring */
class UserStorage {
    // delay 함수 설정
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // async로 선언하며 await delay로 순차적 코드 깔끔하게 작성
    async loginUser(id, password) {
        await delay(2000);
        console.log(id, password)

        if (
            (id === "kyk" && password === "dream") ||
            (id === "coder" && password === "academy")
        ) {
            return id;
        } else {
            throw 'Not Found!';
        }
    }

    async getRoles(user) {
        await delay(1000);

        if (user === "kyk") {
            return { name: "kyk", role: "admin" };
        } else {
            throw 'No Access!';
        }
    }
}

async function loginAndUserInfo() {
    // 여기서는 병렬 처리가 아닌 순차적으로 진행해야 하므로 await 함수명(); 만 작성
    const user4 = await userStorage.loginUser(id, password);
    const userInfo = await userStorage.getRoles(user4);
    return userInfo;
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

loginAndUserInfo()
.then(userInfo => alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role`))
.catch(error => console.error(`에러발생: ${error}`));