/*
 * Conditionals, Functions, Scope and Loops.
 */



let x = 10;

function addNumbers (n, m, x) {
    console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(1, 2, 10);

/*...*/

//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++) {
//    console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++) {
        console.log('j is equal to : ' + j)
    }
}


let x1 = 0;
while (x1 < 10) {
    console.log('Ran');
    x1 = x1 + 1;
}