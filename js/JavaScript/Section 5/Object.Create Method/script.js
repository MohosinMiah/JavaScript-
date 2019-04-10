/*

1. Apart from using function constructor, we can create object using Object.create() method

2. The main difference between the two approaches is how the prototype object gets set up. 

a) With the function constructor, the variables and methods defined in the constructor  will 
be "directly" part of the new instance that you create with this constuctor.

b) With Object.create(), the variables and methods defined in the constuctor will be
part of it's prototype and the new instance that you create with this constuctor 
will have to inherit them

*** Object.create() is more efficient as we don't have to take copy of each instance's
methods and variables in memory like what we do while using function constructor.

*/

var studentProto = {
	calculateAge: function(){
		console.log(2018-this.birthYear);
	}
};

var sophia = Object.create(studentProto);
sophia.name = "Sophia";
sophia.dept = "BBA";
sophia.birthYear = 1990;

sophia.calculateAge();

var john = Object.create(studentProto,
{
	name:{value:'John'},
	dept:{value:'CSE'},
	birthYear:{value: 1975}
});