// Function 함수

/*
함수란 어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록
동일한 작업을 반복적으로 수행 => 미리 정의된 함수를 재사용
객체 생성, 객체의 행위 정의(메소드), 정보 은닉, 클로저, 모듈화 등의 기능을 수행
*/
// 함수의 정의(함수 선언문)
function square(number) {
    return number * number;
}
// 함수의 호출
square(2); // 4

/* 함수 정의
함수 선언문
함수 표현식
Function 생성자 함수
*/

/* 함수 선언문
함수명
매개변수 목록
함수 몸체
*/

// 함수 선언문
function square(number) { // 함수명 square , 매개변수 number
    return number * number; // 함수 몸체
}

/* 함수 표현식
무명의 리터럴로 표현이 가능하다.
변수나 자료 구조(객체, 배열…)에 저장할 수 있다.
함수의 파라미터로 전달할 수 있다.
반환값(return value)으로 사용할 수 있다.
함수명을 생략할 수 있다. => 익명 함수
*/

// 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
    return a * b;
};

// 익명 함수 표현식(anonymous function expression)
var bar = function (a, b) {
    return a * b;
};

console.log(foo(10, 5)); // 50
console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined

// 함수 호출시 함수명이 아니라 함수를 가리키는 변수명을 사용
var foo = function (a, b) {
    return a * b;
};

var bar = foo;

console.log(foo(10, 10)); // 100
console.log(bar(10, 10)); // 100

/* Function 생성자 함수
함수 선언문과 함수 표현식은 모두 함수 리터럴 방식으로 함수를 정의
=> 내장 함수 Function 생성자 함수로 함수를 생성하는 것을 단순화시킨 short-hand(축약법)이다.
*/

new Function(arg1, arg2, ...argN, functionBody)

var square = new Function('number', 'return number * number');
console.log(square(10)); // 100

/* 함수 호이스팅 Hoisting
자바스크립트는 ES6의 let, const를 포함하여 모든 선언
(var, let, const, function, function*, class)을 호이스팅(Hoisting)한다.
*/
var res = square(5);

function square(number) {
    return number * number;
}

// 변수 호이스팅
// TypeError: square is not a function
var res = square(5);

var square = function (number) {
    return number * number;
}

/* 일급 객체
생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등 
프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상을 의미

무명의 리터럴로 표현이 가능하다.
변수나 자료 구조(객체, 배열 등)에 저장할 수 있다.
함수의 매개변수에 전달할 수 있다.
반환값으로 사용할 수 있다.
*/

// 1. 무명의 리터럴로 표현이 가능하다.
// 2. 변수나 자료 구조에 저장할 수 있다.
var increase = function (num) {
    return ++num;
};

var decrease = function (num) {
    return --num;
};

var predicates = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
    var num = 0;

    return function () {
        num = predicate(num);
        return num;
    };
}

var increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

var decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

/* 매개변수
매개변수(parameter, 인자) vs 인수(argument)
매개변수는 함수 내에서 변수와 동일하게 메모리 공간을 확보하며
함수에 전달한 인수는 매개변수에 할당된다.
만약 인수를 전달하지 않으면 매개변수는 undefined로 초기화된다.
*/
var foo = function (p1, p2) {
    console.log(p1, p2);
};

foo(1); // 1 undefined


/* Call-by-value (값에 의한 호출)
 함수 호출 시 원시 타입 인수를 함수에 매개변수로 전달할 때 
 매개변수에 값을 복사하여 함수로 전달하는 방식
 이때 함수 내에서 매개변수를 통해 값이 변경되어도 
 전달이 완료된 원시 타입 값은 변경되지 않는다.
*/
function foo(primitive) {
    primitive += 1;
    return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x);      // 0


/* Call-by-reference (참조에 의한 호출)
함수 호출 시 참조 타입 인수를 함수에 매개변수로 전달할 때 
매개변수에 값이 복사되지 않고 객체의 참조값이 매개변수에 저장되어 함수로 전달되는 방식
=> 함수 내에서 매개변수의 참조값이 이용하여 객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경
*/

function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
    obj.gender = 'female';
}

var num = 100;
var obj = {
    name: 'Lee',
    gender: 'male'
};

console.log(num); // 100
console.log(obj); // Object {name: 'Lee', gender: 'male'}

changeVal(num, obj);

console.log(num); // 100
console.log(obj); // Object {name: 'Kim', gender: 'female'}

/* 반환값
함수는 자신을 호출한 코드에게 수행한 결과를 반환(return)할 수 있다.

return 키워드는 함수를 호출한 코드(caller)에게 값을 반환할 때 사용한다.
함수는 배열 등을 이용하여 한 번에 여러 개의 값을 리턴할 수 있다.
함수는 반환을 생략할 수 있다. 이때 함수는 암묵적으로 undefined를 반환한다.
자바스크립트 해석기는 return 키워드를 만나면 함수의 실행을 중단한 후, 
함수를 호출한 코드로 되돌아간다. 만일 return 키워드 이후에 다른 구문이 존재하면 
그 구문은 실행되지 않는다.
*/
function calculateArea(width, height) {
    var area = width * height;
    return area; // 단일 값의 반환
}
console.log(calculateArea(3, 5)); // 15
console.log(calculateArea(8, 5)); // 40

function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    return [area, volume]; // 복수 값의 반환
}

console.log('area is ' + getSize(3, 2, 3)[0]);   // area is 6
console.log('volume is ' + getSize(3, 2, 3)[1]); // volume is 18

/* 함수 객체의 프로퍼티
함수는 객체이다. 따라서 함수도 프로퍼티를 가질 수 있다.
*/
function square(number) {
    return number * number;
}

square.x = 10;
square.y = 20;

console.log(square.x, square.y);

// 함수는 일반 객체와는 다른 함수만의 프로퍼티를 갖는다.
function square(number) {
    return number * number;
}
console.dir(square);

/* arguments 프로퍼티
arguments 객체는 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 
순회가능한(iterable) 유사 배열 객체(array-like object)이며 함수 내부에서 지역변수처럼 사용된다. 
즉, 함수 외부에서는 사용할 수 없다.
*/
// 자바스크립트는 함수 호출 시 함수 정의에 따라 인수를 전달하지 않아도 에러가 발생하지 않는다.
function multiply(x, y) {
    console.log(arguments);
    return x * y;
}

multiply();        // {}
multiply(1);       // { '0': 1 }
multiply(1, 2);    // { '0': 1, '1': 2 }
multiply(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }

// arguments 객체는 매개변수 갯수가 확정되지 않은 가변 인자 함수를 구현할 때 유용하게 사용된다.

function sum() {
    var res = 0;

    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum());        // 0
console.log(sum(1, 2));    // 3
console.log(sum(1, 2, 3)); // 6
// 함수를 호출할 때 인수들과 함께 암묵적으로 arguments 객체가 함수 내부로 전달
// 유사배열객체란 length 프로퍼티를 가진 객체를 말한다.
// 유사배열객체는 배열이 아니므로 배열 메소드를 사용하는 경우 에러가 발생
function sum() {
    if (!arguments.length) return 0;

    // arguments 객체를 배열로 변환
    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    });
}

// ES6
// function sum(...args) {
//   if (!args.length) return 0;
//   return args.reduce((pre, cur) => pre + cur);
// }

console.log(sum(1, 2, 3, 4, 5)); // 15

/* caller 프로퍼티
caller 프로퍼티는 자신을 호출한 함수를 의미한다.
*/
function foo(func) {
    var res = func();
    return res;
}

function bar() {
    return 'caller : ' + bar.caller;
}

console.log(foo(bar)); // caller : function foo(func) {...}
console.log(bar());    // null (browser에서의 실행 결과)

/* length 프로퍼티
length 프로퍼티는 함수 정의 시 작성된 매개변수 갯수를 의미한다.
*/
function foo() { }
console.log(foo.length); // 0

function bar(x) {
    return x;
}
console.log(bar.length); // 1

function baz(x, y) {
    return x * y;
}
console.log(baz.length); // 2

/* name 프로퍼티
함수명을 나타낸다. 기명함수의 경우 함수명을 값으로 갖고 익명함수의 경우 빈문자열을 값으로 갖는다.
*/
// 기명 함수 표현식(named function expression)
var namedFunc = function multiply(a, b) {
    return a * b;
};
// 익명 함수 표현식(anonymous function expression)
var anonymousFunc = function (a, b) {
    return a * b;
};

console.log(namedFunc.name);     // multiply
console.log(anonymousFunc.name); // ''

/*  __proto__ 접근자 프로퍼티
__proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이
가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티이다.

모든 객체는 [[Prototype]]이라는 내부 슬롯이 있다.
[[Prototype]] 내부 슬롯은 프로토타입 객체를 가리킨다.
프로토타입 객체란 프로토타입 기반 객체 지향 프로그래밍의
근간을 이루는 객체로서 객체간의 상속(Inheritance)을 구현하기 위해 사용
=> 프로토타입 객체는 다른 객체에 공유 프로퍼티를 제공하는 객체

내부 슬롯에는 직접 접근할 수 없고 간접적인 접근 방법을 제공하는 경우에 한하여 접근할 수 있다. 
[[Prototype]] 내부 슬롯에도 직접 접근할 수 없으며
__proto__ 접근자 프로퍼티를 통해 간접적으로 프로토타입 객체에 접근할 수 있다.
*/

// 객체 리터럴로 셍성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log({}.__proto__ === Object.prototype); // true

// __proto__ 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 모든 객체의 프로토타입 객체인 Object.prototype 객체의 프로퍼티이다. 

// 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(Object.getOwnPropertyDescriptor({}, '__proto__'));
// undefined

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true

// 함수도 객체이므로 __proto__ 접근자 프로퍼티를 통해 프로토타입 객체에 접근할 수 있다.
console.log((function () { }).__proto__ === Function.prototype); // true

/* prototype 프로퍼티
prototype 프로퍼티는 함수 객체만이 소유하는 프로퍼티이다. 즉 일반 객체에는 prototype 프로퍼티가 없다.
*/
// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log(Object.getOwnPropertyDescriptor(function () { }, 'prototype'));
// {value: {…}, writable: true, enumerable: false, configurable: false}

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log(Object.getOwnPropertyDescriptor({}, 'prototype'));
// undefined

/* 함수의 다양한 형태 */


/* 즉시 실행 함수
함수의 정의와 동시에 실행되는 함수를 즉시 실행 함수
최초 한번만 호출되며 다시 호출할 수는 없다.
=> 최초 한번만 실행이 필요한 초기화 처리등에 사용
*/
// 기명 즉시 실행 함수(named immediately-invoked function expression)
(function myFunction() {
    var a = 3;
    var b = 5;
    return a * b;
}());

// 익명 즉시 실행 함수(immediately-invoked function expression)
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

// SyntaxError: Unexpected token (
// 함수선언문은 자바스크립트 엔진에 의해 함수 몸체를 닫는 중괄호 뒤에 ;가 자동 추가된다.
// function () {
//     // ...
// } (); // => };();

// 따라서 즉시 실행 함수는 소괄호로 감싸준다.
(function () {
    // ...
}());

(function () {
    // ...
})();

(function () {
    var foo = 1;
    console.log(foo);
}());

var foo = 100;
console.log(foo);

/* 내부 함수
함수 내부에 정의된 함수
아래 예제의 내부함수 child는 자신을 포함하고 있는 부모함수 parent의 변수에 접근할 수 있다.
하지만 부모함수는 자식함수(내부함수)의 변수에 접근할 수 없다.
*/

// 또한 내부함수는 부모함수의 외부에서 접근할 수 없다.
function sayHello(name) {
    var text = 'Hello ' + name;
    var logHello = function () { console.log(text); }
    logHello();
}

sayHello('lee');  // Hello lee
logHello('lee');  // logHello is not defined


/* 재귀 함수
자기 자신을 호출하는 함수
*/
// 피보나치 수열
// 피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, ...
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8

// 팩토리얼
// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
    if (n < 2) return 1;
    return factorial(n - 1) * n;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720

// 재귀 함수는 자신을 무한히 연쇄 호출하므로 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다. 
// 재귀 함수는 반복 연산을 간단히 구현할 수 있다는 장점이 있지만 무한 반복에 빠질 수 있음 주의
// 탈출 조건이 없는 경우, 함수가 무한 호출되어 stackoverflow 에러가 발생
// 대부분의 재귀 함수는 for나 while 문으로 구현이 가능
// 반복문보다 재귀 함수를 통해 보다 직관적으로 이해하기 쉬운 구현이 가능한 경우에만 한정적으로 적용

/* 콜백 함수
함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수
대표적인 예는 이벤트 핸들러 처리
*/

// 콜백 함수는 매개변수를 통해 전달되고 전달받은 함수의 내부에서 어느 특정시점에 실행
var button = document.getElementById('myButton');
button.addEventListener('click', function () {
    console.log('button clicked!');
});

// setTimeout()의 콜백 함수 => 
// 두번째 매개변수에 전달된 시간이 경과되면 첫번째 매개변수에 전달한 콜백 함수가 호출
setTimeout(function () {
    console.log('1초 후 출력된다.');
}, 1000);

// 콜백 함수는 주로 비동기식 처리 모델에 사용된다.
// 비동기식 처리 모델이란 처리가 종료하면 
// 호출될 콜백함수를 미리 매개변수에 전달하고 
// 처리가 종료하면 콜백함수를 호출하는 것

// 콜백함수는 콜백 큐에 들어가 있다가 해당 이벤트가 발생하면 호출
// 콜백 함수는 클로저이므로 콜백 큐에 단독으로 존재하다가 호출되어도 
// 콜백함수를 전달받은 함수의 변수에 접근할 수 있다.

function doSomething() {
    var name = 'Lee';

    setTimeout(function () {
        console.log('My name is ' + name);
    }, 100);
}
doSomething(); // My name is Lee
