const n1=7;
const n2=5;



//                           function declaration

function sum(a,b){
    return a+b;
}

console.log(`${n1} + ${n2} = ${sum(n1,n2)}`);
//console.log(sum(n1,n2));


//                         kintmajam priskirta anonimine funkcija
const minus=function(a,b){
    return a-b;
}

console.log(`${n1} - ${n2} = ${minus(n1,n2)}`);
//console.log(minus(n1,n2));



//
//                  kintmajam priskirta anonimine funkcija su arrow function

const multiply=(a,b)=>{
    return a*b;
}
console.log(`${n1} * ${n2} = ${multiply(n1,n2)}`);


//          kintmajam priskirta anonimine funkcija su arrow function, bet be return 
//              -(jei tik viena salyga, tik tada galima naudoti be return)
const divide=(a,b)=>a/b;
console.log(`${n1} / ${n2} = ${divide(n1,n2)}`);

///         kintmajam priskirta anonimine funkcija su arrow function, bet be return (jei tik viena salyga, tik tada galima naudoti be return)
//      -jei parametru bloke yra tik vienas parametras, tai galima nenaudoti skliaustu
//      -jei parametru bloke yra daugiau nei vienas parametras, tai reikia naudoti skliaustus
const sqr=a=>a*a
    /// arba a**2
console.log(`${n1} * ${n1} = ${sqr(n1,n1)}`);
console.log(`${n2} * ${n2} = ${sqr(n2,n2)}`);

/// funkcija grzaina vardo pirma raide
const firstLetter=name=>name[0];
console.log(firstLetter('Jonas'));
console.log(firstLetter('Maryte'));
console.log(firstLetter('Petras'));

///funkcija grazina pataisyta varda
const fixName=name=>name[0].toUpperCase()+name.slice(1).toLowerCase();
console.log(fixName('jonas'));

//funkcija grazina teksta atbulai
const reverseText=text=>text.split('').reverse().join('');
console.log(reverseText('labas'));