
// The break statement jumps out of a loop and finishes the loop at a ceratin point
for (var i = 1; i <= 5; i++){
	console.log(i);
	if(i===3){
		break;
	}
}
// The continue statement quits the current iteration in the loop & continues with the next one

for (var i = 1; i <= 5; i++){
	if(i===3){
		continue;
	}
	console.log(i);
}