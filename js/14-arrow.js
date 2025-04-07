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