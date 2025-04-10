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

const luckynumber = [9];
const luckynumberA = [20]

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
if (9 === 20) {
    console.log('pomidoras')
} else{
    console.log('bandykite kita karta')
}
if (9 !== 20) {
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

function zodziai(zodisx,zodisz){
    if (zodisx.length > zodisz.length)
    {
        console.log('pomidoras');
    } else { 
        console.log('bandykite dar karta');
    } 
    }
    {
    if (zodisx > zodisz) 
    {
        console.log('pomidoras');
    } else {
    console.log('bandykite dar karta');
    }
    }
    {
    if (zodisx < zodisz) 
    {
        console.log('pomidoras');
    } else {
         console.log('bandykite dar karta');
    }
    }
    {
    if (zodisx >= zodisz) 
    {
        console.log('pomidoras');
    } else {
        console.log('bandykite dar karta');
    }
    }
    {
    if (zodisx <= zodisz) 
    {
    console.log('pomidoras');
    } else {
    console.log('bandykite dar karta');
    }
    }
    {
    if (zodisx == zodisz) {
    console.log('pomidoras');
    }else {
    console.log('bandykite dar karta');
    }
    }
    {
    if (zodisx != zodisz) {
    console.log('pomidoras');
    } else {
    console.log('bandykite dar karta');
    }
    }



//*ciklas




//2
let tekstas='abcdef';
let tekstasAtv= ''

for(let i=tekstas.length-1;i>=0;i--){
    tekstasAtv+=tekstas[i]
}console.log(tekstasAtv)



//1

function sumInRage(start,end){
    let sum =0;
    for(let i=start; i<=end; i++){
    sum+=i
    } return sum
}
console.log(sumInRage(0,0));
console.log(sumInRage(0,4));
console.log(sumInRage(0,100));
console.log(sumInRage(574,815));
console.log(sumInRage(-50,50));
console.log(sumInRage(-70,30));

///3.

function suskaiciuotiDalinimus(intervalasPradzia, intervalasPabaiga) {
    function skaiciaiDalinasiIs(skaicius, daliklis) {
        return skaicius % daliklis === 0;
    }

    function skaiciuotiIntervale(intervalasPradzia, intervalasPabaiga, daliklis) {
        let skaiciai = 0;
        for (let i = intervalasPradzia; i <= intervalasPabaiga; i++) {
            if (skaiciaiDalinasiIs(i, daliklis)) {
                skaiciai++;
            }
        }
        return skaiciai;
    }

    let rezultatai = [
        `Skaičių intervale tarp ${intervalasPradzia} ir ${intervalasPabaiga}, besidalijančių be liekanos iš 3 yra ${skaiciuotiIntervale(intervalasPradzia, intervalasPabaiga, 3)} vienetai.`,
        `Skaičių intervale tarp ${intervalasPradzia} ir ${intervalasPabaiga}, besidalijančių be liekanos iš 5 yra ${skaiciuotiIntervale(intervalasPradzia, intervalasPabaiga, 5)} vienetai.`,
        `Skaičių intervale tarp ${intervalasPradzia} ir ${intervalasPabaiga}, besidalijančių be liekanos iš 7 yra ${skaiciuotiIntervale(intervalasPradzia, intervalasPabaiga, 7)} vienetai.`,
        `Skaičių intervale tarp ${intervalasPradzia} ir ${intervalasPabaiga}, besidalijančių be liekanos iš 5 yra ${skaiciuotiIntervale(intervalasPradzia, intervalasPabaiga, 3)} vienetai.`,
        `Skaičių intervale tarp ${intervalasPradzia} ir ${intervalasPabaiga}, besidalijančių be liekanos iš 7 yra ${skaiciuotiIntervale(intervalasPradzia, intervalasPabaiga, 2)} vienetai.`
    ];

    return rezultatai;
}
/// Funkcijos
//1

function tusciaFunkcija() {
    return false;
}

// Testas
console.log(tusciaFunkcija());

//2
function daugyba(skaicius1, skaicius2) {
    let sandauga = skaicius1 * skaicius2; // Apskaičiuoja sandaugą
    return sandauga; // Grąžina sandaugos rezultatą
}

// Testai
let skaicius1 = 2;
let skaicius2 = 3;
let skaicius3 = 5;

console.log(daugyba(skaicius1, skaicius2)); // 6
console.log(daugyba(skaicius3, skaicius2)); // 15
console.log(daugyba(skaicius1, skaicius3)); // 10

//3


function skaitmenuKiekisSkaiciuje(skaic1){
if (typeof skaic1!=string){
    console.log(' Pateikta netinkamo tipo reikšmė.')
} else if (skaic1.toString().length) {
} return toString().length
}
console.log( skaitmenuKiekisSkaiciuje(5))
console.log( skaitmenuKiekisSkaiciuje(781))
console.log( skaitmenuKiekisSkaiciuje(37060123456))
console.log( skaitmenuKiekisSkaiciuje(true))
console.log( skaitmenuKiekisSkaiciuje('asd'))
console.log( skaitmenuKiekisSkaiciuje(NaN))
//????????

//4


function didziausiasSkaiciusSarase(kintamasis) {
    // Patikriname, ar kintamasis yra masyvas
    if (!Array.isArray(kintamasis)) {
        console.log("Pateikta netinkamo tipo reikšmė.");
        return; // Nutraukiame funkcijos vykdymą, jei kintamasis nėra masyvas
    }

    // Patikriname, ar masyvas nėra tuščias
    if (kintamasis.length === 0) {
        console.log("Pateiktas sąrašas negali būti tuščias.");
        return; // Nutraukiame funkcijos vykdymą, jei sąrašas tuščias
    }

    // Ieškome didžiausio skaičiaus sąraše
    let didziausias = kintamasis[0]; // Pradžiai priskiriame pirmąjį skaičių
    for (let i = 1; i < kintamasis.length; i++) {
        if (kintamasis[i] > didziausias) {
            didziausias = kintamasis[i]; // Jei rastas didesnis skaičius, atnaujiname didžiausią
        }
    }

    return didziausias; // Grąžiname didžiausią skaičių
}

// Testai
console.log(didziausiasSkaiciusSarase([1, 3, 5, 7, 2])); // 7
console.log(didziausiasSkaiciusSarase([9, 2, 4, 6]));     // 9
console.log(didziausiasSkaiciusSarase([7]));              // 7
console.log(didziausiasSkaiciusSarase([]));               // Pateiktas sąrašas negali būti tuščias.
console.log(didziausiasSkaiciusSarase("ne masyvas"));     // Pateikta netinkamo tipo reikšmė.

//4

function didziausiasSkaiciusSarase(sarasas) {
    // Patikriname, ar įvestas kintamasis yra sąrašas (array)
    if (!Array.isArray(sarasas)) {
      return "Pateikta netinkamo tipo reikšmė.";
    }
  
    // Patikriname, ar sąrašas nėra tuščias
    if (sarasas.length === 0) {
      return "Pateiktas sąrašas negali būti tuščias.";
    }
  
    // Inicijuojame kintamąjį, kuriame saugosime didžiausią skaičių
    let didziausias = sarasas[0];
  
    // Pereiname per visą sąrašą ir atnaujiname didžiausią skaičių
    for (let i = 1; i < sarasas.length; i++) {
        if (typeof list[i]!=='number'){ // jog turi buti skaicius
            continue;
        }
        if(!isFinite(list[i])){
            continue;
        }
      if (sarasas[i] > didziausias) {
        didziausias = sarasas[i];
      }
    }
  
    // Gražiname didžiausią skaičių
    return didziausias;
  }
  
  // Testai:
  console.log(didziausiasSkaiciusSarase([1])); // 1
  console.log(didziausiasSkaiciusSarase([1, 2, 3])); // 3
  console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18])); // 78
  console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66])); // 69
  console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8])); // -1
  console.log(didziausiasSkaiciusSarase("pomidoras")); // "Pateikta netinkamo tipo reikšmė."
  console.log(didziausiasSkaiciusSarase([])); // "Pateiktas sąrašas negali būti tuščias."

  //5
  function isrinktiRaides(tekstas, zingsnis) {
    // Patikriname, ar pirmasis kintamasis yra teksto tipo
    if (typeof tekstas !== 'string') {
      return "Pirmasis kintamasis yra netinkamo tipo.";
    }
  
    // Patikriname, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių
    if (tekstas.length === 0 || tekstas.length > 100) {
      return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
    }
  
    // Patikriname, ar antrasis kintamasis yra skaičiaus tipo
    if (typeof zingsnis !== 'number') {
      return "Antrasis kintamasis yra netinkamo tipo.";
    }
  
    // Patikriname, ar antrasis kintamasis yra didesnis už nulį
    if (zingsnis <= 0) {
      return "Antrasis kintamasis turi būti didesnis už nulį.";
    }
  
    // Patikriname, ar antrasis kintamasis nėra didesnis už pateikto teksto ilgį
    if (zingsnis > tekstas.length) {
      return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
    }
  
    // Išrenkame raides pagal nurodytą žingsnį
    let rezultatas = '';
    for (let i = zingsnis - 1; i < tekstas.length; i += zingsnis) {
      rezultatas += tekstas[i];
    }
  
    // Gražiname išrinktas raides
    return rezultatas;
  }
  
  // Testai:
  console.log(isrinktiRaides("abcdefg", 2)); // "bdf"
  console.log(isrinktiRaides("abcdefghijkl", 3)); // "cfil"
  console.log(isrinktiRaides("abc", 0)); // "Antrasis kintamasis turi būti didesnis už nulį."
  console.log(isrinktiRaides("abc", 4)); // "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį."
  console.log(isrinktiRaides(1561, 2)); // "Pirmasis kintamasis yra netinkamo tipo."

  
  //1

  