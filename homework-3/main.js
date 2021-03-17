let palindrome = word => {
  let wordToCheck = word.toLowerCase();
  let secWord = wordToCheck.split('').reverse().join('');

  if (wordToCheck === secWord) {
      console.log(`The word ${word} is a palindrome`);
      return true;
  } else {
      console.log(`The word ${word} is not a palindrome`);
      return false;
  }
};

palindrome('eye');
palindrome('balls');

///////////////////////////////////////

let min = (a,b) => {
    if (a > b ) {
        return b
    } else {
        return a
    }
}

let max = (a,b) => {
    return Math.max(a,b);
}

let max2 = (a,b) => {
   return a > b ? a : b ;
}

console.log(min(2,6));
console.log(max(2,6));
console.log(max2(2,6));

////////////////////////////////////////

let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
console.log(arr);

for (i = 0; i < arr.length; i++) {
    debugger
    arr[i].toString();
    console.log(word);
    word.replace('0', 'zero');
}

console.log(arr);