// 제어문

// 블록문
{
    var foo = 10;
    console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
    x++;
}
console.log(x); // 10

// 함수 선언문
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2)); // 3

// 조건문

if (조건식) {
    // 조건식이 참이면 이 코드 블록이 실행된다.
} else {
    // 조건식이 거짓이면 이 코드 블록이 실행된다.

} if (조건식1) {
    // 조건식1이 참이면 이 코드 블록이 실행된다.
} else if (조건식2) {
    // 조건식2이 참이면 이 코드 블록이 실행된다.
} else {
    // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}

