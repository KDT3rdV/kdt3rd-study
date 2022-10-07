var no_1 = 1
var no_2 = 2
var no_3 = 3

console.log('no_1=' + no_1);
console.log('no_2=' + no_2);
console.log('no_3=' + no_3);

const add = function(no_1, no_2, no_3) {
    let result = no_1 + no_2 + no_3;
    console.log(result);
    alert(result);
}
add(no_1, no_2, no_3)

const sub = function(no_1, no_2) {
    let result = no_1 - no_2;
    console.log(result);
    alert(result);
}
sub(no_1, no_2)

const divide = function(no_1, no_2) {
    let result = no_1 / no_2;
    console.log(result);
    alert(result);
}
divide(no_1, no_2)

const mul = function(no_1, no_2) {
    let result = no_1 * no_2;
    console.log(result);
    alert(result);
}
mul(no_1, no_2)