// 자바스크립트의 기본 문법

var x; // 변수의 선언
x = 6; // 정수값의 할당

var str = 'Hello World';

// 숫자 리터럴
10.50
1001

// 문자열 리터럴
'Hello'
"World"

// 불리언 리터럴
true
false

// null 리터럴
null

// undefined 리터럴
undefined

// 객체 리터럴
{ name: 'Lee', gender: 'male' }

// 배열 리터럴
[1, 2, 3]

    // 정규표현식 리터럴
    / ab + c /

    // 함수 리터럴
    function () { }

// 산술 연산
10.50 + 1001

// Number
var num1 = 1001;
var num2 = 10.50;

// String
var string1 = 'Hello';
var string2 = "World";

// Boolean
var bool = true;

// null
var foo = null;

// undefined
var bar;

// Object
var obj = { name: 'Lee', gender: 'male' };

// Array
var array = [1, 2, 3];

// function
var foo = function () { };

// 산술 연산자
var area = 5 * 4; // 20

// 문자열 연결 연산자
var str = 'My name is ' + 'Lee'; // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
var foo = 3 > 5; // false

// 논리 연산자
var bar = (5 > 3) && (2 < 4);  // true

// 타입 연산자
var type = typeof 'Hi'; // "string"

// 인스턴스 생성 연산자
var today = new Date(); // Sat Dec 01 2018 00:57:19 GMT+0900 (한국 표준시)

var foo = 1 + '10'; // '110'
var bar = 1 * '10'; // 10

// 변수의 선언
var x = 5 + 6;

// 함수의 선언
function foo(arg) {
    // 함수 종료 및 값의 반환
    return ++arg;
}

var i = 0;
// 반복문
while (1) {
    if (i > 5) {
        // 반복문 탈출
        break;
    }
    console.log(i);
    i++;
}

// 함수
function myFunction(x, y) {
    return x + y;
}

// if 문
if (x > 0) {
    // do something
}

// for 문
for (var i = 0; i < 10; i++) {
    // do something
}

var time = 10;
var greeting;

if (time < 10) {
    greeting = 'Good morning';
} else if (time < 20) {
    greeting = 'Good day';
} else {
    greeting = 'Good evening';
}

console.log(greeting);

// 표현식
5             // 5
5 * 10        // 50
5 * 10 > 10   // true
    (5 * 10 > 10) && (5 * 10 < 100)  // true

// 선언문(Declaration statement)
var x = 5 * 10; // 표현식 x = 5 * 10를 포함하는 문이다.
// 할당문(Assignment statement)
x = 100; // 이 자체가 표현식이지만 완전한 문이기도 하다.

// 함수의 정의(함수 선언문)
function square(number) {
    return number * number;
}

// 함수의 정의(함수 선언문)
function square(number) {
    return number * number;
}

// 함수의 호출
square(2); // 4

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name);
    }
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', gender: 'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee

var arr = [1, 2, 3, 4, 5];

console.log(arr[1]); // 2