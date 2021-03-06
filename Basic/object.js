// 객체 Object

/* 객체란 ?
자바스크립트는 객체기반의 스크립트 언어
자바스크립트를 이루는 거의 모든 것이 객체이다.
자바스크립트의 객체는 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합이다.
프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.
*/

/* 프로퍼티란?
프로퍼티는 프로퍼티 키(이름)와 프로퍼티 값으로 구성
프로퍼티 키는 프로퍼티를 식별하기 위한 식별자

프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 symbol 값
프로퍼티 값 : 모든 값

특징 :
1. 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다
2. 프로퍼티 키에 문자열이나 symbol 값 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 된다.
3. 배열과는 달리 객체는 프로퍼티를 열거할 때 순서를 보장하지 않는다.
*/

/* 메소드
프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다
=> 객체에 제한되어 있는 함수
*/

/* 객체 생성 방법
자바 : 클래스 기반 객체 지향 언어 -> 클래스 정의 , new 연산자를 사용하여 인스턴스를 생성하는 방식
자바스크립트 : 프로토타입 기반 객체 지향 언어 -> 클래스라는 개념이 없고 별도의 객체 생성 방법이 존재
(ECMAScript 6에서 새롭게 클래스가 도입됨)
*/

/* 객체 리터럴
가장 일반적인 자바스크립트의 객체 생성 방식
*/

var emptyObject = {};
console.log(typeof emptyObject); // object

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name);
    }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee

/* Object 생성자 함수
new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성
=> 빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성하는 방법

생성자(constructor) 함수란?
=> new 키워드와 함께 객체를 생성하고 초기화하는 함수
=> 생성자 함수를 통해 생성된 객체를 인스턴스(instance)라 한다

객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 해당 객체에 프로퍼티를 추가하고 값을 할당한다. 
이미 존재하는 프로퍼티 키에 새로운 값을 할당하면 프로퍼티 값은 할당한 값으로 변경된다.
*/

// 빈 객체의 생성
var person = new Object();
// 프로퍼티 추가
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function () {
    console.log('Hi! My name is ' + this.name);
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee

// 객체를 생성하는 방법은 객체 리터럴을 사용하는 것이 더 간편하다. 
// Object 생성자 함수 방식은 특별한 이유가 없다면 그다지 유용해 보이지 않는다.

/* 생성자 함수
객체 리터럴 방식과 Object 생성자 함수 방식으로 객체를 생성
=> 프로퍼티 값만 다른 여러 개의 객체를 생성할 때 불편하다.
*/

var person1 = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name);
    }
};

var person2 = {
    name: 'Kim',
    gender: 'female',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name);
    }
};

// 생성자 함수를 사용하면 마치 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 
// 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

// 생성자 함수
// 생성자 함수 이름은 일반적으로 대문자로 시작한다. 이것은 생성자 함수임을 인식하도록 도움을 준다.
function Person(name, gender) {
    this.name = name; // this는 생성자 함수가 생성할 인스턴스(instance)를 가리킨다.
    this.gender = gender;
    this.sayHello = function () {
        console.log('Hi! My name is ' + this.name);
    };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();


// 생성자 함수 내에서 선언된 일반 변수는 private(외부에서 참조 불가능)하다. 
// 즉, 생성자 함수 내부에서는 자유롭게 접근이 가능하나 외부에서 접근할 수 없다.
function Person(name, gender) {
    var married = true;         // private
    this.name = name;           // public
    this.gender = gender;       // public
    this.sayHello = function () { // public
        console.log('Hi! My name is ' + this.name);
    };
}

var person = new Person('Lee', 'male');

console.log(typeof person); // object
console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }

console.log(person.gender);  // 'male'
console.log(person.married); // undefined

/* 프로퍼티 키
일반적으로 문자열(빈 문자열 포함)을 지정
프로퍼티 키는 문자열이므로 따옴표(‘’ 또는 ““)를 사용한다.
*/

// 프로퍼티 값은 모든 값과 표현식이 올 수 있으며 프로퍼티 값이 함수인 경우 이를 메소드라 한다.
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10,
    function: 1 // OK. 하지만 예약어는 사용하지 말아야 한다.
};

console.log(person);

// 표현식을 프로퍼티 키로 사용하려면 키로 사용할 표현식을 대괄호로 묶어야 한다.
var person = {
    [first - name]: 'Ung-mo', // ReferenceError: first is not defined
    // 자바스크립트 엔진은 표현식을 평가하기 위해 식별자 first를 찾을 것이고 이때 ReferenceError가 발생
};

/*  예상치 못한 에러가 발생할 수 있으므로 예약어를 프로퍼티 키로 사용해서는 않된다.
abstract  arguments boolean break byte
case  catch char  class*  const
continue  debugger  default delete  do
double  else  enum* eval  export*
extends*  false final finally float
for function  goto  if  implements
import* in  instanceof  int interface
let long  native  new null
package private protected public  return
short static  super*  switch  synchronized
this  throw throws  transient true
try typeof  var void  volatile
while with  yield
*는 ES6에서 추가된 예약어
*/

/* 프로퍼티 값 읽기
마침표(.) 표기법, 
대괄호([]) 표기법
*/

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
    1: 10
};

console.log(person);

console.log(person.first - name);    // NaN: undefined-undefined
console.log(person[first - name]);   // ReferenceError: first is not defined
console.log(person['first-name']); // 'Ung-mo'

console.log(person.gender);    // 'male'
console.log(person[gender]);   // ReferenceError: gender is not defined
console.log(person['gender']); // 'male'

console.log(person['1']); // 10
console.log(person[1]);   // 10 : person[1] -> person['1']
//console.log(person.1);    // SyntaxError

// 프로퍼티 키가 유효한 자바스크립트 이름이고 예약어가 아닌 경우 프로퍼티 값은 마침표 표기법, 대괄호 표기법 모두 사용할 수 있다.
// 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 한다.


/* 프로퍼티 값 갱신
객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신된다.
*/

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};

person['first-name'] = 'Kim';
console.log(person['first-name']); // 'Kim'

/* 프로퍼티 동적 생성
객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 하면 주어진 키와 값으로 프로퍼티를 생성하여 객체에 추가
*/

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};

person.age = 20;
console.log(person.age); // 20

/* 프로퍼티 삭제
delete 연산자를 사용하면 객체의 프로퍼티를 삭제할 수 있다. 이때 피연산자는 프로퍼티 키이어야 한다.
*/

var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male',
};

delete person.gender;
console.log(person.gender); // undefined

delete person;
console.log(person); // Object {first-name: 'Ung-mo', last-name: 'Lee'}

/* for-in 문
for-in 문을 사용하면 객체(배열 포함)에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.
*/
var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male'
};

// prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
for (var prop in person) {
    console.log(prop + ': ' + person[prop]);
}

/*
first-name: Ung-mo
last-name: Lee
gender: male
*/

var array = ['one', 'two'];

// index에 배열의 경우 인덱스가 반환된다
for (var index in array) {
    console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
*/

/* for-in 문은 객체의 문자열 키(key)를 순회하기 위한 문법이다. 배열에는 사용하지 않는 것이 좋다.
1. 객체의 경우, 프로퍼티의 순서가 보장되지 않는다. 
그 이유는 원래 객체의 프로퍼티에는 순서가 없기 때문이다. 
배열은 순서를 보장하는 데이터 구조이지만 객체와 마찬가지로 순서를 보장하지 않는다.
2. 배열 요소들만을 순회하지 않는다.
*/

var array = ['one', 'two'];
array.name = 'my array';

for (var index in array) {
    console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
name: my array
*/

// for-in 문의 단점을 극복하기 위해 ES6에서 for-of 문이 추가되었다.

const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
    console.log(value);
}

/*
1
2
3
*/

for (const [index, value] of array.entries()) {
    console.log(index, value);
}

/*
0 1
1 2
2 3
*/

// for–in 문은 객체의 프로퍼티를 순회하기 위해 사용하고 
// for–of 문은 배열의 요소를 순회하기 위해 사용

/*  Pass-by-reference
object type을 객체 타입 또는 참조 타입이라 한다.
참조 타입이란 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨을 의미
객체 타입은 동적으로 변화할 수 있으므로 어느 정도의 메모리 공간을 확보해야 하는지
예측할 수 없기 때문에 런타임에 메모리 공간을 확보하고 메모리의 힙 영역에 저장된다.
이에 반해 원시 타입은 값(value)으로 전달된다. 
즉, 복사되어 전달된다. 이를 pass-by-value라 한다.
*/
// Pass-by-reference
var foo = {
    val: 10
}

var bar = foo;
console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // true

bar.val = 20;
console.log(foo.val, bar.val); // 20 20
console.log(foo === bar);      // true

var foo = { val: 10 };
var bar = { val: 10 };

console.log(foo.val, bar.val); // 10 10
console.log(foo === bar);      // false

var baz = bar;

console.log(baz.val, bar.val); // 10 10
console.log(baz === bar);      // true

var a = {}, b = {}, c = {}; // a, b, c는 각각 다른 빈 객체를 참조
console.log(a === b, a === c, b === c); // false false false

a = b = c = {}; // a, b, c는 모두 같은 빈 객체를 참조
console.log(a === b, a === c, b === c); // true true true


/* Pass-by-value
원시 타입은 값(value)으로 전달된다. 
즉, 값이 복사되어 전달된다. 
이를 pass-by-value(값에 의한 전달)라 한다.
*/

// Pass-by-value
var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b);    // 1  10
console.log(a === b); // false