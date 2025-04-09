//sort

//tekstai sort(abeceles tvarka pradeda nuo didziuju raidziu)

const text=['labas','rytas','Lietuva','duona','aviza','Zirnis','anakonda'];
console.log(text);
sort.text();
console.log(sort.text);
const pseud=['d','b','c','a'];
console.log(pseud);

//skaiciai (prasideda nuo 1 ( atsakymas 10,2,4,6,8))
const numbers=[10,2,8,4,6].sort((a,b)=>a-b);//jei pakeisi b-a bus atbuline tvarka
console.log(numbers);


const people = [
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: false },
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: true },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => a.name.length - b.name.length);
console.log(people);

people.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);
console.log(people);

people.sort((a, b) => a.isMarried > b.isMarried ? 1 : a.isMarried === b.isMarried ? 0 : -1);
console.log(people);