`use strict`;

/* Shorthand property names */
{
    // 일반적인 값을 포함한 선언
    const kyk = {
        name: 'kyk',
        age: '29'
    };

    // 변수로 저장된 값을 넣어서 선언
    const name = 'kyk';
    const age = '18';
    const kyk2 = {
        name: name,
        age: age,
    };

    // 변수명과 값이 같다면, 단축 속성명을 사용할 수 있다.
    const kyk3 = {
        name,
        age,
    }
    
    console.log(kyk, kyk2, kyk3);
}


/* Destructuring Assignment */
{
    /* 객체 구조 분해 할당 */
    const student = {
        name: 'kyk',
        level: 1,
    };
    {
        // 기존 방식
        // 객체의 키를 기준으로 값을 각각 추출
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }
    {
        // 구조 분해 할당 방식
        // 객체의 키를 기준으로 값을 추출하여 변수에 한번에 할당 가능
        const { name, level } = student;
        console.log(name, level);

        // 새로운 변수명으로도 할당 가능
        const { name: studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }

    /* 배열 구조 분해 할당 */
    const animals = ['dog', 'cat'];
    {
        // 기존 방식
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }
    {
        // 구조 분해 할당 방식
        const [first, second] = animals;
        console.log(first, second);
    }
}


/* Spread Syntax */
{
    const obj1 = { key1: 'value1' };
    const obj2 = { key2: 'value2' };
    const array = [obj1, obj2];

    // 1.간단하게 배열 복사 가능 (주소 값만 복사하고 받은 것이므로 원본이 변경되면 복사본도 변경됨)
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    // 2.객체 복사 가능
    const obj3 = { ...obj1 };
    console.log(obj1, obj3);

    // 3.배열 병합
    const fruits1 = ['apple', 'banana'];
    const fruits2 = ['orange', 'watermelon'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // 4.객체 병합
    const dog1 = { name: 'dog1', color: 'white' };
    const dog2 = { name: 'dog2', age: 2 };
    const dog = { ...dog1, ...dog2 };   // 겹치는 속성은 마지막 객체의 속성 값으로 덮어 씌워짐
    console.log(dog);
}


/* Default Parameters */
{
    // 기본 파라미터 값 설정
    function printMessage(message = 'default message') {
        console.log(message);
    }
    printMessage('hello');
    printMessage(); // 기본 파라미터 값이 없을 경우 undefined
}

/* Ternary Operator */
{   
    const isCat = true;
    const animal = isCat ? 'cat' : 'dog';
    console.log(animal);
}

/* Template Literals */
{
    const weather = 'sunny';
    const temperature = '16C';
    console.log(`Today weather is ${weather} and temperature is ${temperature}.`);
}