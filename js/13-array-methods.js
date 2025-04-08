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


console.log(texts.reverse());//apvercia masyva ir pasidaro is kito galo

const c1=[1,11];
const c2=[2,22];
const c3=[3,33];
const c4=[4,44];

const c12=[c1.concatc2];//sujungia masyvus i viena///galima nauditi ir ta pati masyva apjungti
console.log(texts.sort());//surikiuoja masyva


const h=[11,22,33,44,55];
h.splice(3,0,4)//startine pozicija nuo kur istrinti (pozicija 3), kiek elementu istrinti (0), ir ka ideti i masyva (4)
console.log(h);//[11,22,33,4,44,55]


const f=s=>s[0];
/// MAP

const k=[10,2,8,4,6];///padvigubint ir idet padvigubintus i kita masyva
const k1=[];

for (const n of k){
    k1.push(n*2);
}
console.log(k2);
function triple(n1){
    return n*3
}
const k3=k.map(triple);//sukuria nauja masyva k3 
console.log(k3);


const quadro=n=>n*4
const k4=k.map(quadro);
console.log(k4);

const k5=k.map(n=>n*5);
console.log(k5);

const k6=k.map(n=>n);///masyvo kopija
console.log(k6);

const k7=k.map(n=>n+1);
console.log(k7);


const dict=['pomidoras','agurkas','bulve','svogunas'];


const dict2=dict.map(w=>w[0]);
console.log(dict2);//pirma raide


const dict3=dict.map(w=>w.length);//ilgis
console.log(dict3);

const people=[

    
        {name:'Jonas',age:99},
        { name:'maryte', age:88},
        {name:'petras',age:77},
        {name:'ona',age:66},
    
]

const people100=people.map(p=>`${person.name} liko ${100-person.age} metai.`)
console.log(people100);
///jonas liko 1 metai
///maryte liko 12 metu
//petras liko23 metai
//ona liko 34 metai


const peopleNames=person.map(person=>person.name);///ismapina varda
console.log(person.name);


const peopleAge=person.map(person=>person.age)///ismapina amziu
console.log(people.age)

const peopleIsMarried=people.map(person=>{//// itraukia nauja masyva
    person.isMarried=true;
    people.luckyNumber=13;
    return person;
});
console.log(peopleIsMarried);


///filter
const p=[10,2,8,4,6];/// paprastai ipusinti 
const p5=[];

for(const n of p){
    if(n>5){
        p5.push(n);
    }
}
console.log(p5);


const p6=p.filter(n=>n>6);//trumpiau supusinti
console.log(p6);

const p7=p.filter(n=>n>2&&n<8);
console.log(p7);

const texts5=['labas','','rytas','','rytas'];//teksto ilgis
const texts5Updated=texts5.filter(t=>t.length>0);
console.log(texts5Updated)

