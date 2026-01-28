// 1.
const numbers = [1,2,3,4,5,6,7,8,9];

// const rev = numbers.reverse();
// console.log(rev);

// 2.
// const rev1 = [];
// for(let i=0; i<numbers.length; i++) {
//     const num = numbers[i];
//     rev1.unshift(num);
// }
// console.log(rev1);

// 3.
// const rev2 = [];
// for(const num of numbers) {
//     rev2.unshift(num);
// }
// console.log(rev2);

// 4.
const rev3 = [];
for(let i=numbers.length-1; i>0; i--) {
    rev3.push(numbers[i]);
}
console.log(rev3);