// The break statement jumps out of a loop and finishes the loop at a ceratin point
for (var i = 0; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i); // outputs: 0 1 2
}
// The continue statement quits the current iteration in the loop & continues with the next one

for (var i = 0; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i); // outputs: 0 1 2 4 5
}
