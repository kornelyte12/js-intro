///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const list = [];
console.log(list);

list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(4, 6);
console.log(list);

list.push(1, 2, 3, 4, 5);
console.log(list);

const numbers = [10, 2, 8, 4, 6];
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    doubleNumbers.push(number * 2);
}

console.log(doubleNumbers);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes = [];
const nameFirstLetters = [];
const upperCaseNames = [];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    nameSizes.push(name.length);
    nameFirstLetters.push(name[0]);
    upperCaseNames.push(name.toUpperCase());
}

console.log(nameSizes);
console.log(nameFirstLetters);
console.log(upperCaseNames);

const n1 = [1, 11, 111];
const n2 = [2, 22, 222, 2222];

const n12 = [];
// const n12 = [1, 11, 111, 2, 22, 222, 2222];

for (let i = 0; i < n1.length; i++) {
    n12.push(n1[i]);
}

for (let i = 0; i < n2.length; i++) {
    n12.push(n2[i]);
}

console.log(n12);


const numbers2=[10,2,8,4,6];
console.log(numbers2);
numbers2.push(9);//ideda nari i masyva
console.log(numbers2);
numbers2.pop();// salina paskutini nari
console.log(numbers2);

numbers2.unshift(1);// ideda nari i masyvo pradzia
console.log(numbers2);

numbers2.shift();// salina pirma nari
console.log(numbers2);

const magic=[1,2,3,4,5,10,11,12];
console.log(magic.includes(10));//true ar egzistuoja masyve
console.log(magic.includes(100));//false

console.log(magic.indexOf(10));// 5 grazina indeksa []
console.log(magic.indexOf(100));// -1 grazina -1 jei neranda []

const texts=['labas','rytas','pasauli'];
const zodziai=`reikalingi zodziai: ${texts.join[', ']}`;// sujungia masyvo elementus i viena stringa
console.log(texts.join(' '));// sujungia masyvo elementus i viena stringa
console.log(zodziai);


