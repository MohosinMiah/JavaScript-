/*
var years = [1990, 2002, 1970,2000];
var emptyArr = [];

for (var i = 0; i < years.length; i++){
	emptyArr[i] = 2018 - years[i];
}

for (var i = 0; i < emptyArr.length; i++){
	if (emptyArr[i] > 18) {
		console.log("Full age: " + emptyArr[i]);
	} else {
		console.log("Not Full age: " + emptyArr[i]);
	}
}
*/


//var yearTwo = [2010, 2011, 1988, 1950];

function printFullAge(years){


	var emptyArr = [];
	var fullAges = [];

	for (var i = 0; i < years.length; i++){
		emptyArr[i] = 2018 - years[i];
	}

	for (var i = 0; i < emptyArr.length; i++){
		if (emptyArr[i] >= 18) {
			console.log("Full age: " + emptyArr[i]);
			fullAges.push(true);
		} else {
			console.log("Not Full age: " + emptyArr[i]);
			fullAges.push(false);
		}
	}

	return fullAges;

}

var full_1 = printFullAge([2010, 2011, 1988, 1950]);
console.log(full_1);

var full_2 = printFullAge([1938, 1953, 2001, 2014]);
console.log(full_2);











