let zodis='';
if (4<2){
    zodis='daugiau';

}else{
    zodis='maziau';

}
console.log(zodis);
let skaicius=0;
if(7>=5){
    skaicius=7;
}
else{
    skaicius=5;
}
console.log(skaicius);

const word=4>2?'daugiau':'maziau';
console.log(word);

const number=7>=5?7:5;
console.log(number);

const years=22;
const isAdult=years>=18?'suaugęs':'vaikas';
console.log(isAdult);


const value=7;
const type=typeof value === 'number'?'skaicius':'ne skaicius';
console.log(type);


if (false){
    console.log('TAIP');    

}else{
    console.log('NE');    
}


/// visi tekstai yra pozityvys, iskyrus tuscia
///visi skaiciai pozityvus iskyrus 0( net uir minusiniai yra pozityvus)
//visi array yra pozityvus
/// visi objektai yra pozityvus
/// visi funkcijos yra pozityvus
/// visi null yra negatyvus
/// visi undefined yra negatyvus

const a=0
?1
:2;
console.log(a);

const b=1
?2
:3;
console.log(b);

const c=2
?3
  ?4
  :5
:6;
console.log(c);

const d=0
?1
:2
  ?3
  :4;
console.log(d);

const e=1
?2
   ?3
   :4
:5
   ?6
   :7;
console.log(e);


//unary(vienas)=>1
//binary(du)+,-,*,/
//ternary(trys)?:
