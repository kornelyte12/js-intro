console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);//kvadratu pakelti


//abs
console.log('\nabs')//privercia rasyti is naujos eilutes (\n)
console.log(Math.abs(5));
console.log(Math.abs(-5));//pavercia pozityviu

//abs
console.log('\nabs');
console.log(Math.cbrt(8));///kubine saknis
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));



//ceill
console.log('\nceill');//apvalinimas i virsu
console.log(Math.ceil(8));
console.log(Math.ceil(8.9));
console.log(Math.ceil(8.5));
console.log(Math.ceil(8.0001));

//floor

console.log('\nfloor');//apvalinimas i apacia
console.log(Math.floor(8));
console.log(Math.floor(8.9));
console.log(Math.floor(8.5));
console.log(Math.floor(8.0001));


//round
console.log('\nround');//apvalinimas i virsu tik puse
console.log(Math.round(8));
console.log(Math.round(8.9));
console.log(Math.round(8.5));
console.log(Math.round(8.0001));

//trunc

console.log('\ntrunc');//palieka tik sveika skaiciu
console.log(Math.trunc(8));
console.log(Math.trunc(4.5));
console.log(Math.trunc(8.5));
console.log(Math.trunc(-8.0001));

//hypot
console.log('\nhypot');//istrizaine staciojo trikampio
console.log(Math.hypot(8,9));
console.log(Math.hypot(8,10));//(3*3+4*4)**0.5 pitagoras
console.log(Math.hypot(8,12));

//max

console.log('\nmax');//rasti didziausia skaiciu sarase(jei ras teksta ismes NaN)
console.log(Math.max(10,2,8,4,5))
const list=[10,2,8,4,5]
console.log(Math.max(list));

//min
console.log('\nmin');//rasti maziausia skaiciu sarase(jei ras teksta ismes NaN)
console.log(Math.min(10,2,8,4,5))
const list1=[10,2,8,4,5]
console.log(Math.min(list1));

//POW
console.log('\npow');//pakelta laipsniu (2**0),(2**1),(2**2),(2**3)...
console.log(Math.pow(2,0));
console.log(Math.pow(2,1));
console.log(Math.pow(2,2));
console.log(Math.pow(2,3));
console.log(Math.pow(2,4));
console.log(Math.pow(2,5));
console.log(Math.pow(2,6));
console.log(Math.pow(2,7));
console.log(Math.pow(2,8));
console.log(Math.pow(2,9));
console.log(Math.pow(2,10));

//sign

console.log('\nsign');//nesvarbu koks skaikcius grazina tik zenkla

console.log(Math.sign(5));
console.log(Math.sign(-5));

//sqrt
console.log('\nsqrt');//kelia **0.5 (4**0.5)
console.log(Math.sqrt(4));
console.log(Math.sign(9));


//random

console.log('\nrandom');//visi nuo 0 iki 1 visi jie desimtainiai [0...1)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//random skaicius": nuo 0 iki 10 [0, 10)


//0 iki 1
console.log('\nrandom');
console.log(Math.random())


// random skaiciai :3 arba 7
//[0...1)=[0....0.5)+[0.5...1)
for(let i=0; i<10;i++) {
    if(Math.random()<0.5){
        console.log(3)
    }else {
        console.log(7)
    
    console.log(Math.random())
}}


//[12...149]


function randomNumber(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min)
}
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));


function randomNumber(min,max) {//padidinti vienu sveiku skaiciu su random metodu
    return Math.floor(Math.random()*(max-min+1)+min)
   }
   const counts=[0,0,0,0,0,0,0,0,0]
for(let i=0; i<10;i++) {
    const index = randomNumber(0,9);
    counts[index]++
}
console.log(counts);

const counts2=[0,0]
for(let i=0; i<1000000;i++) {
    const index = randomNumber(0,9);
    counts[index]++
}
console.log(counts2);




