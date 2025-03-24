const text = 'profas'
console.log(text)




console.log(text[5]);
console.log(text[4]);
console.log(text[3]);
console.log(text[2]);
console.log(text[1]);
console.log(text[0]);


const pirmas='astronautas'
console.log(pirmas)



console.log(pirmas[10])
console.log(pirmas[9])
console.log(pirmas[8])
console.log(pirmas[7])
console.log(pirmas[6])
console.log(pirmas[5])
console.log(pirmas[4])
console.log(pirmas[3])
console.log(pirmas[2])
console.log(pirmas[1])
console.log(pirmas[0])

//funkciju nd
// 4,4 -> 4+4=8
// 10,5 -> 10/5=2
// 10,2 -> 10*2=20
function sum(a,b) {
    return `${a}+${b}=${a + b}`;
}
console.log(sum(4,4))

function sum(a,b) {
    return `${a}/${b}=${a + b}`;
}
console.log(dal(10,5))
function dal(a,b) {
    return `${a}+${b}=${a + b}`;
console.log(dal(10,2))
}
console.log(daug(10,2))
function daug(a,b) {
    return `${a}*${b}=${a * b}`;}
    
    console.log(1, true && true,false|| false)
    console.log(2, true && false,false|| true)
    console.log(3, false && true,false|| true)
    console.log(4, false && false,true|| true)
    console.log(5, false && false,false|| false)
    console.log(6, true && true,true|| true)
    console.log(7, true && false,true|| false)
    console.log(8, false && true,true|| false)
    // rezultatas 8 kombinacijos
console.clear()

   ///1.a //kintamuju inicijavimas
// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console

//Sukurti 3 kintamuosius su teksto tipo reikšmėmis
    let n1 = 5;
    console.log(n1)
    let n2 = 3;
    console.log(n2)
    let n3 = 2;
    console.log(n3)
//2.a.
    console.log(n1+n2+n3)
    function sum(n1, n2, n3) {
        const result = n1 +n2 + n3;
        return `${n1} + ${n2} + ${n3} = ${result}`;
    }
    

    

    //1.2.a. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
    // Po kiekvieno jų inicijavimo, išvesti į console
//a.
    const string1='labas'
    const string2=' rytas'
    const string3=' tau'
    console.log("labas"+" rytas"+" tau")
//2.a
 const sum2=(string1+ string2+ string3)
    console.log(sum2)
   

     //1.3.a Sukurti kintamąjį su sąrašo tipo reikšme
        // Po inicijavimo, išvesti į console
        // Apskaiciuoti vertę esančių elementų sąraše sumą

        const arr1 = [1,2,3,4,5]
        console.log(arr1)
        const arr2 = [6,7,8,9,10]
        console.log(arr2)
        const arr3 = [11,12,13,14,15]
        console.log(arr3)


    console.log(arr1[0]-arr2[0]+arr3[0])
    console.log(arr1[1]-arr2[1]+arr3[1])
    console.log(arr1[2]-arr2[2]+arr3[2])
    console.log(arr1[3]-arr2[3]+arr3[3])
    console.log(arr1[4]-arr2[4]+arr3[4])


      //3.2.a./2.b ////?????
     
      let lengthsum2= (arr1-arr2+arr3)


//1.4.a  Sukurti kintamąjį su teksto tipo reikšme

const a = ['upes, ezerai, jura, vandenynas, zemynai'];
console.log(a);
const b = ['oras, vanduo, zeme, ugnis, stichija'];
console.log(b);
const c = ['saule, dangus, debesys, lietus, sniegas'];
console.log(c);


//2.4.
const sum3=(a+b+c)
    console.log(sum3)



//*3.
// Kintamuju palyginimas
//3.1 a-f

const gotNumber1 = -2;
const gotNumber2 = 3;

if (gotNumber1 < gotNumber2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if (gotNumber1 > gotNumber2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if (gotNumber1 == gotNumber2) {
    console.log('Pomidoras');

}if (gotNumber1 != gotNumber2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');

}if (gotNumber1 <= gotNumber2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
if (gotNumber1 => gotNumber2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}
//3.2
//// pomidoras -> Zodzis "Pomidoras" yra sudarytas is 9 raidziu.
// bandykite dar karta -> Zodziai "bandykite kita karta" yra sudarytas is 20 raidziu.
function nameLength(name) {
    const size = name.length;
    return `Zodzis "${name}" yra sudarytas is ${size} raidziu.`;
}

const nl1 = nameLength('Pomidoras');
const nl2 = nameLength('bandykite kita karta');

console.log(nl1);
console.log(nl2);


//3.3 a-f

const name1 = 9;
const name2 = 20

if (9 < 20) {
    console.log('pomidoras')
} else{
    console.log('bandykite kita karta')
}

if (9 > 20) {
    console.log('pomidoras')
} else{
    console.log('bandykite kita karta')
}
if (9 == 20) {
    console.log('pomidoras')
} else{
    console.log('bandykite kita karta')
}
if (9 != 20) {
    console.log('pomidoras')
} else{
    console.log('bandykite kita karta')
}
if (9 <= 20) {
    console.log('pomidoras')
} else{
    console.log('bandykite kita karta')
}
if (9 >= 20) {
    console.log('pomidoras')
} else{
    console.log('bandykite kita karta')
}


//3.4 /////???????????
const zodis1= ['sekasi']
const zodis2= ['kaip']
const zodis3= ['tu']
const zodis4= ['ka']
const zodis5= ['labas']

    function string(zodis)
   {return sumlenght(zodis1+zodis2+zodis3+zodis4+zodis5)
string(zodis1)
string(zodis2)
string(zodis3)
string(zodis4)
string(zodis5)
   }
    console.log(zodis1[0]-zodis2[0]+zodis3[0]-zodis4[0]+zodis5[0])
    console.log(zodis1[1]-zodis2[1]+zodis3[1]-zodis4[1]+zodis5[1])
    console.log(zodis1[2]-zodis2[2]+zodis3[2]-zodis4[2]+zodis5[2])
    console.log(zodis1[3]-zodis2[3]+zodis3[3]-zodis4[3]+zodis5[3])
    console.log(zodis1[4]-zodis2[4]+zodis3[4]-zodis4[4]+zodis5[4])








//2.5 A-F
//const zodisx= ['pomidoras']
//const zodisz= ['bandykite dar karta']

const zodisx= ['pomidoras']
const zodisz= ['bandykite dar karta']

function if (zodisx,zodisz)

zodisx.length
if(zodisx.length>zodisz.length){
    
    console.log('pomidoras')
}
   { else if{ (zodisx.length>zodisz.length)

    console.log('bandykite dar karta')
  }
  }
  

 if(zodisx>zodisz) 
{
    console.log('sekasi', 'kaip')}



 if(zodisx<zodisz)
{
     console.log('sekasi', 'kaip')}



 if(zodisx>=zodisz)
 {
     console.log('sekasi', 'kaip')}



 if(zodisx <= zodisz)
 {
     console.log('sekasi', 'kaip')}



if(zodisx==zodisz)
 {
     console.log('sekasi', 'kaip')}



if(zodisx!=zodisz)
{
     console.log('sekasi', 'kaip')}            













