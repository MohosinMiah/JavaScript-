/*
In javaScript, we can use a function as an argument to another function
*/

// declaring an array
var years = [1980,1990,1985,1992];

// creating a function where the 'arr' takes array and 'fn' takes function as parameter
function yearCalc(arr,fn){

	var arrRes = []; // creating an empty array

	for (var i = 0; i < arr.length ; i++) {
		arrRes.push(fn(arr[i])); // putting elements into the array
	}

	return arrRes;
}

// creating a callback function
function ageList(el){
	return 2018 - el;
}

// creating a callback function
function isFullAge(param){
	return param >= 30;
}

// storing the function value in a variable
var result = yearCalc(years,ageList);

// storing the function value in a variable
var fullAge = yearCalc(result,isFullAge);

// outputing result
console.log(result); // output: Array [ 38, 28, 33, 26 ]

console.log(fullAge); // output: Array [ true, false, true, false ]




