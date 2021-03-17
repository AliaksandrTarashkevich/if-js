let user = "John Doe";
let student = "Alexander";

console.log(student);
user = student;// now its Alexander
console.log(user);
///////////////////////////////////////////////
let test = 1;
test += 1; // its 2
console.log(test);
test -= 1; // its 1 again
console.log(test);
console.log(Boolean(test));

let array1 = [2,3,5,8];
let sum = 1;
for (let i = 0; i < array1.length; i++) {
    sum *= array1[i];
}
console.log(sum);

let array2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 5 && array2[i] < 10) {
        console.log(array2[i]);
    }
    if (array2[i]%2 !== 0) {
        console.log(array2[i]);
    }
}

