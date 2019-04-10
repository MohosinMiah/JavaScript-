/*

1. Operator precedence determines the way in which operators are parsed with respect to each other. Operators with higher precedence execute first and operators with lower precedence executes later.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

2. Pre and Post increment:
    a) With ++i, the value is first incremented, then evaluated. So if i was 1, it would be counted as 2,and
    then stored as 2. 

    b) With i++, the value is first evaluated, then incremented. So if i was 1, it would be counted as 1, but then stored as 2.

*/

// multiplication has higher precedence than addition that's why multiplication is done first & addition is done last

var thisYear = 2018;
var birthyear = thisYear - 26 * 2;
console.log(birthyear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (25 - 4) / (2 + 1);

console.log(ageJohn); // outputs: 7
console.log(ageMark); // outputs: 7

// pre-increment

console.log(++ageJohn); // outputs: 8
console.log(ageJohn) // outputs: 8

// post-increment

console.log(ageMark++); // outputs: 7
console.log(ageMark) // outputs: 8


// pre-increment & post-increment concept

// pre-increment
var i = 0;
var array = [10, 20, 30];
var val = array[++i];
console.log(val); // outputs: 20 since val = array[1] in this case

// post-increment
var i = 0;
var array = [10, 20, 30];
var val = array[i++];
console.log(val); // outputs: 10 since val = array[0] in this case
