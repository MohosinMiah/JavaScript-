/*

01. call()

Function.call(value of this, arg1, arg2, …) // will execute Function

02. apply()

Function.apply(value of this, [arg1, arg2, ..]) // Will execute Function

03. bind()

newFunction = Function.bind(value of this, arg1, arg2 …) // will return a new function

04. apply() is very similar to call(). The only difference is that .call() takes arguments 
separately(one after another) and .apply() takes arguments as an array

reference: https://medium.com/@owenyangg/javascript-call-apply-and-bind-explained-to-a-total-noob-63f146684564

*/

var sophia = {
	name : 'Sophia'
}

function greetSophia(param1,param2){
	console.log(this.name + " is a " + param1 + " and a " + param2)
}

// call method
greetSophia.call(sophia,'singer', 'dancer');

// apply method
greetSophia.apply(sophia,['manager','consultant']);

// bind method
var greeting = greetSophia.bind(sophia, 'journalist', 'photographer');
greeting();