
//1 0-15 rasti intervalo suma
console.log('1 uzduotis');
let suma=0
for(let i=5;i<=15;i++)
{
    suma+=i
}
console.log(suma);

//2 isvesti po viena raide zodzio 'vakaras'
console.log('2 uzduotis');
let zodis="Vakaras";

for(let i=0;i<zodis.length;i++){
    console.log(zodis[i]);
}

//3 seseto daugybos lentele
console.log('3 uzduotis');
for (let i = 1; i <= 10; i++) {
    console.log(`6 * ${i} = ${6 * i}`);}

//4 nuo 5 iki 1 ir vietoj 0 rasom boom
console.log('4 uzduotis');
for(i=5;i>=0;i--){
        if(i===0){
            console.log('BOOM')
        } else if (i!=0){
            console.log(i)
        }
    }


//5 nuo 3 iki 18 sudeti visus lyginius
console.log('5 uzduotis');
let suma1=0
for(let i=3;i<=18;i++){
    console.log(i);
    if(i%2===0){
        suma1 += i
    }
}console.log(suma1)

//6  kad isvestu visa sarasa i console
console.log('6 uzduotis');
let sarasas=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<sarasas.length;i++){
    console.log(sarasas[i]);
}


//7  isvesti vardus
console.log('7 uzduotis');
let vardai=['Ana','Ema','Lana','Luna'];
for(let i=0;i<vardai.length;i++){
    console.log('Mano vardas":'+vardai[i]);
} 

//8 isvesri visus saraso skaitinius elementus
 console.log('6 uzduotis');
let elementai=['elemen1','elemen2','elemen3','elemen4'];
 for(let i=0;i<elementai.length;i++){
    console.log(elementai[i]);
 }

 //9 isvesti elementus nuo paskutinio iki pirmo
console.log('9 uzduotis');
 
 let elementai2=['elemen1','elemen2','elemen3','elemen4'];
  for(let i=elementai2.length-1;i<0;i++){
     console.log(elementai2[i]);
  }

  //10 
  console.log('10 uzduotis');







  //11
  console.log('11 uzduotis');
let sum=0
  let kintamieji=["L","a","b","a","s"];
  for (let i=0;i<kintamieji.length;i++){

    console.log(kintamieji);//???

  }

  //12 parasyk cika kuris atskirai ispausdintu raide zodyje "programavimas"///???
  console.log('12 uzduotis');

  let zodisP='programavimas';
  //13 nuo 2 iki 10 intervala suaugintu??????????

  console.log('uzduotis 13');
  let sandauga=1
  for(i=2;i<=10;i++){
    sandauga*=i
    return sandauga
  } console.log(sandauga(2,10))