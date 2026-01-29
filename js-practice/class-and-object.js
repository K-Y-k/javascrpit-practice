'use strict';


/* 클래스 선언하기 */
class Person {

    // 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    // 메소드
    speak() {
        console.log(`${this.name}: hello!`);
    }

}

const kyk = new Person('kyk', 29);
console.log(`kyk.name = ${kyk.name}`);
console.log(`kyk.age = ${kyk.age}`);
kyk.speak();


/* Getter and Setter */
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


/* 생성자 없이 필드 정의법 */
class Experiment {
    publicField = 2;   // public
    #privateField = 0; // private
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined


/* static properties와 method */
class Article {
    static publisher = 'Dream Coding';
    
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // static은 Class명으로 접근해야 한다.
console.log(Article.publisher);
Article.printPublisher();


/* 상속과 다형성 */
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drwaing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
    draw() {
        super.draw();
        console.log(`ㅅ`);
    }
}
class Triangle extends Shape {
    // 오버라이딩
    getArea() {
        return this.width * this.height / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


/* instanceof 연산자 */
console.log(`rectangle instance of Rectangle ${rectangle instanceof Rectangle}`);
console.log(`triangle instance of Rectangle ${triangle instanceof Rectangle}`);
console.log(`triangle instance of Triangle ${triangle instanceof Triangle}`);
console.log(`triangle instance of Shape ${triangle instanceof Shape}`);
console.log(`triangle instance of Object ${triangle instanceof Object}`);