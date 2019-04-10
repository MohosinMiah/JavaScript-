/*

We use IIFE for following reasons:

a) When we don't want to reuse a function. It's an overkill to create an entire named function that 
we only want to execute once right after we declare it. 

b) provides data security. If we wrap everything in an IIFE, everything becomes private, 
including the functions inside the IIFE. So we can't access the function from anywhere like 
we access a regular function

*/

// IIFE without a parameter

(function(){
	var score = Math.random() * 10;
	console.log(score >= 5); // output: true or false
})();

// IIFE with a parameter

(function(point){
	var score = Math.random() * 10;
	console.log(score >= 5 - point); // output: true or false
})(1);
