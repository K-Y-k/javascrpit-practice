`use strict`;

// 자바스크립트는 동기적이다. (synchronous)
// hoisting 덕분에 순차적으로 작성한 코드가 적용되기 때문에 동기적
// hoisting: var 변수, 함수 선언들이 아래에 작성하여도 자동적으로 제일 위로 올라가는 것
console.log('1'); // 동기

setTimeout(() => console.log('2'), 1000); // 비동기
// setTimeout(function () {
//     console.log('2');
// }, 1000);

console.log('3'); // 동기


/* 동기적 Callback Function */
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')); // 동기

/* 비동기적 Callback Function */
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log(`async callback`), 2000); // 비동기


// callback 지옥 예제
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'kyk' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'kyk') {
                onSuccess({ name: 'kyk', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();

// userStorage.loginUser('kyk', 'dream', kyk.getRoles('kyk'));
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }, 
            error => { console.log(error) }
        );
    },
    error =>{ console.log(error) }
);