let sum = function (a) {
    let sum1 = function (b) {
        return a + b;
    }
    return sum1;
}

console.log(sum(2)(5));

///////////////////////

const array = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue']
const textOne = document.getElementById('text1');
const textTwo = document.getElementById('text2');
const textThree = document.getElementById('text3');

let i = 0;
[textOne, textTwo, textThree].forEach(item => {
    item.addEventListener('click',event => {
       event.target.style.color = array[i];
        i = i > 3 ? 0 : i + 1;
    });
});