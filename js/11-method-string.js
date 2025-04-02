

///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

///at
console.log('\nat');


console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);
console.log('Labas'[4]);

const text='Pomidoras';
console.log(text[0]);
console.log(text[text.length(-1)]);///pirmas nuo galo
console.log(text[text.length(-3)]);///trecias is galo
console.log('---',text.at(0));

//includes
console.log('\nincludes');
console.log('Vasara'.includes('V'));// ar yra ta raide zodyje

//function includes(text);{  //* pasidaryti visus*//
//return false;
//}
 ///startaWith
 console.log('\nstartWith');
 console.log('pomidoras'.startsWith('p'));/// ar prasideda raide p
 console.log('pomidoras'.startsWith('P'));


 ///endsWith
 console.log('\nendsWith');
 console.log('pomidoras'.endsWith('oras'));//ar baigiasi raidemis oras


 ///indexOf
 console.log('\nindexOf');
 console.log('pomidoras'.indexOf('a'));//kurioje pozicijoje yra raide a paraso array indexa
 console.log('pomidoras'.indexOf('P'));// ismeta -1 indexa jei nera tokio simbolio

 console.log('pomidoras'.indexOf('o'));//randa 1 indexa
 console.log('pomidoras'.indexOf('p', 0))///toliau ieskok - parasyti nuo kur (indexa)

 console.log('Kulverstukas'.indexOf('u',2));//tada ras kitas pozicijos nes jei randa sustoja reikia pradeti nuo tos pozicijos kurioj buvo pirma ir tada tesia darba 
 console.log('Kulverstukas'.indexOf('u'))

 const k='Kulverstukas';
 console.log('Kujlverstukas'.indexOf('s'));
 console.log('Kulverstukas'.indexOf('s'),k.indexOf('s')+1);///supaprastinta tai ka rasiau virsuje


 'hwajk'.repeat

  ///repeat
  console.log('\nrepeat');
  const symbol='labas'
  const megaSymbol=symbol.repeat(10);
  console.log(symbol)
  console.log(megaSymbol);//pakartoja ta zodi ar raide 10 kartu

  function stringRepeat(text,count){
   let result=''
    for(let i=0;i<count;i++);{

    result+=text;
    }
    return result;
  }
console.log(stringRepeat('rikiki',3))

///replace

console.log('\nreplace');
const summer='Vasara'.replace('a','-');
console.log(summer);//pakeicia raide tam tikra, i kuria nori
  
const summer2 = 'vasara'.replace('a', '-').replace('a', '-');
console.log(summer2);

const summer3 = 'vasara'.replace('a', '-').replace('a', '-').replace('a', '-').replace('a', '-').replace('a', '-').replace('a', '-').replace('a', '-');
console.log(summer3);

const cloud = 'debeselis'.replace('ebe', '***');
console.log(cloud);

const template = 'VARDAS ejo i parduotuve pirkti DAIKTAS.';
const name = 'Jonas';
const item = 'pomidoras';

const shop = template.replace('VARDAS', name).replace('DAIKTAS', item);

console.log(shop);

const template2 = 'Klaseje sedi: V1, V2, V3, V4.';
const classmates = template2.replace('V4', 'Ona').replace('V1', 'Jonas').replace('V2', 'Maryte').replace('V3', 'Petras');

console.log(classmates);

// replaceAll
console.clear();
console.log('\nreplaceAll');

console.log('vasara');
console.log('vasara'.replace('a', '-'));
console.log('vasara'.replaceAll('a', '-'));

const template3 = 'VARDAS saunuolis. VARDAS grazuolis. VARDAS smalsuolis. VARDAS murzius.';
const multiName = template3.replaceAll('VARDAS', 'Petras');
console.log(multiName);

console.log('ananasas'.replace('a', ''));
console.log('ananasas'.replaceAll('a', ''));
console.log('ananasas'.replaceAll('na', ''));

const hi = 'Labas rytas, Lietuva!';
const hiNormalSize = hi.replaceAll(' ', '').length;

console.log(hiNormalSize);

// toUpperCase
console.clear();
console.log('\ntoUpperCase');

console.log('labas'.toUpperCase());
console.log('Labas'.toUpperCase());
console.log('LABAS'.toUpperCase());
console.log('5rg84 sf1s25r; 4s52af548sd'.toUpperCase());

// toLowerCase
console.clear();
console.log('\ntoLowerCase');

console.log('LABAS'.toLowerCase());
console.log('laBAS'.toLowerCase());
console.log('A5RGTS 841G5FF26; A5S4GS5G4'.toLowerCase());

// slice
console.clear();
console.log('\nslice');

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('pomidoras'.slice(3));

console.log('pomidoras'.slice(0, 1));
console.log('pomidoras'.slice(0, 2));
console.log('pomidoras'.slice(0, 3));
console.log('pomidoras'.slice(1, 3));

console.log('pomidoras'.slice(0, -1));
console.log('pomidoras'.slice(0, -2));
console.log('pomidoras'.slice(0, -3));
console.log('pomidoras'.slice(3, -3));

console.log('pomidoras'.slice(-4));
console.log('pomidoras'.slice(-6, -2));