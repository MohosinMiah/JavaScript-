/*
 
1. A closure is a function having access to the parent function's scope, even after the parent
function has closed and due to the scope chain ensure that outer functions cannot access or change inner functions variable.

2. It makes it possible for a function to have "private" variables. 

*/

// closure in action 01:

function retirement(retirementAge){

	var str = " years left until retirement";

	return function(yearOfBirth){
		age = 2018 - yearOfBirth;
		console.log(retirementAge-age + str);
	}

}

var retirementUs = retirement(65);
retirementUs(1990);

var retirementIndia = retirement(70);
retirementIndia(1990);

// closure in action 02:

function interviewQuestion(job){

	var greet = "Hey";

	return function(name){
		if (job == 'teacher'){
			console.log(greet + " " + name + " how is your teaching going on?");
		} else if (job == 'designer') {
			console.log(greet + " " + name + " what's UX design?");
		} else {
			console.log(greet + " " + name + " what do you do?" );
		}

	}
}

interviewQuestion('teacher')('Sophia');
interviewQuestion('player')('Sophia');

// closure in action 03:

function insurance(paycheck){
	return function(rate){
		console.log(paycheck*rate);
	}
}

var getJohnsInsurance = insurance(2000);
getJohnsInsurance(0.2);

var getMarysInsurance = insurance(1500);
getJohnsInsurance(0.3);

var getRoysInsurance = insurance(3000);
getJohnsInsurance(0.5);