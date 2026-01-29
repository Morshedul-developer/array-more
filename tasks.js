//* Task 1
//? Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// solution

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const rev = [];

// for(let i=colors.length-1; i>=0; i--) {
//     rev.push(colors[i]);
// }
// console.log(rev);

//* Task 2
//? Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 78, 46]

// solution

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];

// for(const number of numbers) {
//     if(number % 2 === 0) {
//         evenNumbers.push(number);
//     }
// }
// console.log(evenNumbers);

//* Task 3
//? Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: const numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

// solution

// const numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

// console.log(numbers.join(""));

//* Task 4 (Hard)
//? Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

// solution

// const statement = 'I am a hard working person';

// const rev = statement.split(' ').reverse().join(' ');

// console.log(rev);

//* Task 5
//? Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

// solution

// const numbers = [1, 2, 3];

// const newArr = [...numbers];

// newArr[0] = 99;

// console.log("The original array is :", numbers);
// console.log("The copy array is :", newArr);

//* Task 6
//? Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// Expected ooutput:
// John scored 85
// Alice scored 90

// solution

// const students = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 },
// ];

// for(const student of students) {
// console.log(student.name, "scored", student.marks);
//     console.log(`${student.name} scored ${student.marks}`);
// }

//* Task 7
//? Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:

// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// Expected Array:

// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

// solution

const numbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const newArr = [...numbers];

newArr[1][0] = 99;

console.log(newArr);