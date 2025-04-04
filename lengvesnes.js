
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

  //10 //Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės (1, 2, 5, 10, 20, 50, 100, 200, 500)
  console.log('10 uzduotis');
  for(let i = 1; i<=500; i++)
    {
        if(i === 1 || i ===2 || i=== 5 || i===10 || i===20  || i===50 || i===100  || i===200 || i===500)
        {
            console.log(i)
        }
    }

  //11 sudėliotų kintamąjį Žodis, kurio reikšmė yra ‘Labas’
  console.log('11 uzduotis');
let sum='';
  let kintamieji=["L","a","b","a","s"];
  for (let i=0;i<kintamieji.length;i++){

    console.log(kintamieji[i]);

  }

  //12 parasyk cika kuris atskirai ispausdintu raide zodyje "programavimas"///???
  console.log('12 uzduotis');
 
  let zodisP = 'Programavimas';

  for (let i = 0; i<zodisP.length; i++)
  {
      console.log(zodisP[i]);
  }
   //13 nuo 2 iki 10 intervala suaugintu
  console.log('uzduotis 13');
  let sandauga=2
  for(i=2;i<=10;i++){
    sandauga=sandauga*i
  } console.log(sandauga)

  //14 nelyginius kaiciu nuo 1 iki 30 suma
  console.log('uzduotis 14');

  let suma2=0;
    for(i=1;i<=30;i++){
        if(i%2!=0){
            suma2+=i
        }}
//15 isvesti skaicius nuo 20 iki 10

console.log('uzduotis 15');
for(i=20;i>=10;i--){
    console.log(i);
}
//16 isvesti "sabal" zodi atvirksciai

console.log('uzduotis 16');
let zodis2="sabal";
let atvirksciai="";
for(i=zodis2.length-1;i>=0;i--){
    atvirksciai+=zodis2[i]
}
console.log(atvirksciai);
//17 programavinas zodis atvirksciai
console.log('uzduotis 17');

let zodis3="samivamargorp";
let atvirksciai2="";
for(i=zodis3.length-1;i>=0;i--){
    atvirksciai2+=zodis3[i]
}
console.log(atvirksciai2);
//18 isvesti visus skaicius iki 100 jei skaicius dalinasi is 7 isvesti 'lucky'
console.log('uzduotis 18');
let lucky=0;
for(i=1;i<=100;i++){
    if(i%7===0){
        lucky+=i
    }
}
console.log(lucky);
//19 kad isvestu i console dvigubas reiksmes siu skaiciu 2,3,6,8
console.log('uzduotis 19');
let skaiciai=[2,3,6,8];
let dvigubas=0;
for(i=0;i<skaiciai.length;i++){
    dvigubas+=skaiciai[i]*2
}
console.log(dvigubas);
//20 kad isvestu i console skaicius mazesnius uz 100 jei skaiciai 
console.log('uzduotis 20');
let skaiciai2=[2,14,10,1000,503,8,0];
let mazesniuz100=0;
for(i=0;i<skaiciai2.length;i++){
    if(skaiciai2[i]<100){
        mazesniuz100+=skaiciai2[i]
    }
}
console.log(mazesniuz100);
//22 prie elemento prideti 2
console.log('uzduotis 22');
let skaiciai3=[2,8,88,14];
let prideti2=0;
for(i=0;i<skaiciai3.length;i++){
    prideti2+=skaiciai3[i]+2
}
console.log(prideti2);
//21 kiek a yra abrakadabra
console.log('uzduotis 21');
let zodis4="abrakadabra";
let kiekA=0;
for(i=0;i<zodis4.length;i++){
    if(zodis4[i]==='a'){
        kiekA++
    }
}
console.log(kiekA);
//23 nebesikiskiakopusteliaudavome yra e
console.log('uzduotis 23');
let zodis5="nebesikiskiakopusteliaudavome";
let kiekE=0;
for(i=0;i<zodis5.length;i++){
    if(zodis5[i]==='e'){
        kiekE++
    }
}
console.log(kiekE);
//24 nebesikiskiakopusteliaudavome kur yra e ir kurioje vietoje

console.log('uzduotis 24');
let zodis6 = "nebesikiskiakopusteliaudavome";
let eIndex = zodis.indexOf('e');
for (let i = 0; i < zodis6.length; i++) {
    if (zodis5[i] === 'e') {
        console.log(`Raidė "e" yra ${i + 1}-oje vietoje.`);
    }
}
//25 lobis=150 atmti skaiciu reiksmes nuo 20 iki 50
console.log('uzduotis 25');
let lobis=150;
let suma3=0;
for(i=20;i<=50;i++){
    suma3+=i
}
console.log(lobis-suma3);
