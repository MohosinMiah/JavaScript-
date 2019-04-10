/*

1. Every javaScript object has a prototype property, which makes inheritance possible 
in javaScript.

2. The prototype property of an object is where we put methods and properties that we want other 
objects to inherit.

3. A parent object's prototype property is accessible by all of it's instances(child objects)

4. When an object wants to access a certain method or property, the search starts in that 
object's protoype itself and if it can't be found the search moves on to the parent 
object's proptotype and then moves to 'Object' object's prototype until the method or property 
is found.
This process is known as 'Prototype Chain'

5. The 'Object' object's proptotype is accessible by every object of a document.

*/