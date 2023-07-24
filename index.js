function add(a, b) {
    return a + b;
}
console.log(add(2, 2))

function subtract(a, b) {
    return a - b;
}
console.log(subtract(4, 1))

function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 2))

function divide(a, b) {
    return a / b;
}
console.log(divide(4, 2))

function increment(n) {
    return n += 1;
}
console.log(increment(1))

function decrement(n) {
    return n -= 1;
}
console.log(decrement(2))

function makeInt(n) {
    return parseInt(n, 10);
}
console.log(makeInt("5.333"))

function makeInt(n) {
    return parseInt(n, 10);
}
console.log(makeInt("JustAString"))

function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal("5.333"))

function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal("JustAString"))