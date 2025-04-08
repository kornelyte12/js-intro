const person={
    name:'Jonas',
    age:99,
    isMarried:true,
    0:'nulis',
};
const keys=[Object.keys(person)]
console.log(person['age']);
console.log(person['name']);
console.log(person['isMarried']);

for (const key of keys){
    console.log(person[key]);
}

for(const key in person){
    console.log(person[key]);
}

const text ='Labas';// suskaiciuoja kiek yra raidziu zodyje

const symbols={};// analize
symbol['L']=1;
symbol['a']=1;
symbol['b']=1;
symbol['a']+=1;
symbol['s']=1;
console.log(symbols);

for(const s of text){
    if(symbol[s]){
        symbols[s]++}
        else{
            symbols[s]=1;
        }
    }
console.log(symbols)

let max = 0;//didziausias kiekis
for (const s in symbols){
   if(symbol[s]>max){
    max=symbols[s]
   }
}
console.log(max)

const maxSymbols=[];///kurios dazniausios
for(const s in symbols){
    if(symbols[s]===max){
        max=symbols[s]
    }
}






const count={
    'L':1,
    'a':2,
    'b':1,
    's':1,
}
const max1 =2;
const letter= 'a';

const obj={
    name:'Maryte'
}
obj.age=88;
console.log(obj);

obj['isMarried']=false;
console.log(obj);

