/*

Operator precedence determines the way in which operators are parsed with respect to each other. Operators with higher precedence become the operands of operators with lower precedence.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

*/

// multiplication has higher precedence than addition that's why multiplication is done first & addition is done last

var thisYear = 2018;
var birthyear = thisYear - 26 * 2;
console.log(birthyear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (25 - 4) / (2 + 1);

// pre-increment
++ageJohn;
console.log(++ageJohn); // prints 9 

// post-increment
ageMark++;
console.log(ageMark++); // prints 8

/*

With ++i, the value is incremented, then evaluated. So if i was 1, it would be evaluated as 2. 
With i++, if i was 1, it would be evaluated as 1, but then stored as 2.

*/

// Here val = array[0] as it's ++i
var i = 0;
var array = [10, 20, 30];
var val = array[i++];
console.log(val);

// Here val = array[1] as it's i++
var i = 0;
var array = [10, 20, 30];
var val = array[++i];
console.log(val);
