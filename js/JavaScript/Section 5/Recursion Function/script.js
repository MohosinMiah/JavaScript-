/*
In javaScript, we can return a function from another function as functions are first class

var result = 1;

for (var i = 1; i <= 5; i++) {
	result = result*i;
}

console.log(result);

*/


function factorial(num){

	if (num === 1) {
		return num;
	}

	return num*factorial(num-1);  

}

console.log(factorial(5));