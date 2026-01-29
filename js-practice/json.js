`use strict`;


/* JSON */
/* 직렬화 Object -> JSON */
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {  // 함수는 출력 표기에 제외됨
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']); // 일부 필드만 가져올 수 있음
console.log(json);

// 콜백 함수 활용도 가능 (세밀한 조정이 필요할 때 사용)
json = JSON.stringify(rabbit, (key, value) =>  {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'kyk' : value;
});
console.log(json);


/* 역직렬화 JSON -> Object */
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);

console.log(obj);

rabbit.jump(); // 기존 객체에는 선언했던 함수가 있지만
//obj.jump();  // 직렬화 때 함수가 들어가지 않아서 역직렬화 되었을 때의 객체에서 함수 호출이 불가능
               // Uncaught TypeError: obj.jump is not a function

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());   직렬화 과정에서 string으로 받았기 때문에
console.log(obj.birthDate); // 2026-01-28T01:42:29.749Z

// 콜백 함수를 활용하여 세밀 조정하기
const obj2 = JSON.parse(json, (key, value) =>  {
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj2.birthDate.getDate());