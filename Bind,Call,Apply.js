/////////////////////////////
// Lecture: Bind, call and apply

/*
The call method allows us

to set the this variable here in the first argument,

and we set it to "emily" because we wanted

to use John's presentation method,

but setting the this variable to "emily,"

so that we could use John's method on Emily.

So that is the call method.

There is a very similar method which is called

the apply method, and the only difference is

that this one accepts the arguments as an array,

so that's only two arguments, first this variable,

and then an array where all the other arguments go.

*/

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};
john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['friendly', 'afternoon']);
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}
function isFullAge(limit, el) {
    return el >= limit;
}
var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);


