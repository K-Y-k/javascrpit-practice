`use strict`;


/* Callback 지옥 코드를 Promise로 해결 */
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'kyk' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'kyk') {
                    resolve({ name: 'kyk', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// then을 통해 순차적으로 파악 가능
userStorage.loginUser(id, password)
.then(user => userStorage.getRoles(user))
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(error => console.error(`에러발생: ${error}`));



// const loginUser = new Promise((resolve, reject) => {
//     const id = prompt('enter your id');
//     const password = prompt('enter your password');

//     if (
//         (id === 'kyk' && password === 'dream') ||
//         (id === 'coder' && password === 'academy')
//     ) {
//         resolve(id);
//     } else {
//         reject(new Error('not found'));
//     }
// }, 2000);

// const getRoles = user => new Promise((resolve, reject) => {
//     if (user === 'kyk') {
//         resolve({ name: 'kyk', role: 'admin' });
//     } else {
//         reject(new Error('no access'));
//     }
// }, 1000);


// loginUser
// .then(user => getRoles(user))
// .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
// .catch(error => console.error(`에러발생: ${error}`));

