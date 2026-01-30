`use strict`;

/* Optional Chaining */
{
    const user = { 
        name: 'kyk',
        job: { 
            title: 'developer',
            manager: { 
                name: 'Bob',
            }
        },
    };
    const user2 = {
        name: 'Bob',
        // 이 객체는 job 프로퍼티가 없는 상태
    };

    // 적용 전
    function printManager1(person) {
        console.log(person.job.manager.name);
    }
    printManager1(user);
    // printManager1(user2); // user2 객체는 job 프로퍼티가 존재하지 않아서 Error

    // 삼항 연산자 적용
    function printManager2(person) {
        console.log(person.job
            ? person.job.manager
                ? person.job.manager.name
                : undefined
            : undefined);
    }
    printManager2(user);
    printManager2(user2); // undefined

    // Optional Chaining 적용
    function printManager3(person) {
        // 중복적인 부분을 해소해준다.
        console.log(person.job?.manager?.name);
    }
    printManager3(user);
    printManager3(user2); // undefined
}


/* Nullish Coalescing Operator */
{
    // 사용자는 아무런 이름을 부여하고 싶지 않은데 
    // ''은 false 값이기 때문에 || 연산자를 사용하면 'Guest'가 할당되는 문제
    const name = '';
    const userName = name || 'Guest';
    console.log(userName); // 'Guest'

    // 숫자 0이라는 값이 할당 되었지만 
    // 0은 false라서 undefined가 할당되는 문제
    const num = 0;
    const message = num || 'undefined';
    console.log(message); // 'undefined'

    // Nullish Coalescing Operator 적용하여 해결
    // ??은 값 자체가 있으면 그대로 할당해준다.
    const name2 = '';
    const userName2 = name2 ?? 'Guest';
    console.log(userName2); // ''
}   