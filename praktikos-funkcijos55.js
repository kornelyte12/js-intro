///                          funkcijos


///1 dvieju skaiciu suma

console.log('1 uzduotis')

function sum(a,b){
    return `${a}+${b}=${a+b}`
}
console.log(sum(5,7))


//2 dviejuj skaiciu skirtumas
console.log('2 uzduotis')


function min(a,b){
    return `${a}-${b}=${a-b}`
}
console.log(min(5,1))




//3 dveiju skaiciu sandauga
console.log('3 uzduotis')



function san(a,b){
    return `${a}*${b}=${a*b}`
}
console.log(san(2,2))






//4 dvieju skaiciu dalyba
console.log('4 uzduotis')


function dal(a,b){
    return `${a}/${b}=${a/b}`
}
console.log(dal(10,5))




//5 dvieju skaiciu vidurkis
console.log('5 uzduotis')

function vid(a,b){
    return `(${a}+${b})/2=${(a+b)/2}`
}
console.log(vid(5,7))

//6 ar skaicius teigiamas
console.log('6 uzduotis')
let skaicius=7
function arTeigiamas(skaicius){
    if(skaicius>0){
        console.log('Jis teigiamas')
    } else 
        console.log('false')
       
    }
    
    arTeigiamas(skaicius)


    //7  ar lyginis
    console.log('7,8 uzduotis')
let skaicius1=7
function arLyginis(skaicius1){
    if(skaicius1%=0){
        console.log('Jis lyginis')
    } else 
        console.log('nelyginis')
       
    }
    
    arLyginis(skaicius1)

    //9 dalinasi is 5 be liekanos


console.log('9 uzduotis')
let skaicius2=50
function arDalinasiBe(skaicius2){
    if(skaicius2%5===0){
        console.log('dalinasi')
    } else 
        console.log('nesidalina')
       
    }
    
    arDalinasiBe(skaicius2)

    //10 ar lygus simtui

    console.log('10 uzduotis')
    let skaicius3=50
function arLygus100(skaicius3){
    if(skaicius3===100){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
arLygus100(skaicius3)

//11 ar didesnis uz 10
console.log('11 uzduotis')
let skaicius4=5
function arLygus100(skaicius4){
if(skaicius4>10){
    console.log('Taip')
}else{
    console.log('Ne')
}
}
arLygus100(skaicius4)

//12 grazina didesni is dvieju skaiciu
console.log('12 uzduotis')


function didesnio(skaicius5,skaicius6){
    return Math.max(skaicius5,skaicius6)
}
console.log(didesnio(7,6))
//13 grazinti mazesni is dvieju skaiciu


console.log('13 uzduotis')


function mazesnio(skaicius5,skaicius6){
    return Math.min(skaicius5,skaicius6)
}
console.log(mazesnio(7,6))

//14 patikrinti ar trys skaiciai yra vienodi
console.log('14 uzduotis')
let skaicius7=5
let skaicius8=5
let skaicius9=5
function arVienodi(skaicius7,skaicius8,skaicius9){
    if(skaicius7===skaicius8 && skaicius8===skaicius9){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
arVienodi(skaicius7,skaicius8,skaicius9)
//15 ar du skaiciai yra lygus
console.log('15 uzduotis')
let skaicius10=5
let skaicius11=5
function arLygus(skaicius10,skaicius11){
    if(skaicius10===skaicius11){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
arLygus(skaicius10,skaicius11)

//16 ar skaicius yra tarp 1 ir 10

console.log('16 uzduotis')
let skaicius12=5
function arTarp1ir10(skaicius12){
    if(skaicius12>=1 && skaicius12<=10){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
arTarp1ir10(skaicius12)
//17 ar skaicius yra tarp 50 ir 100

console.log('17 uzduotis')
let skaicius13=50
function arTarp50ir100(skaicius13){
    if(skaicius13>=50 && skaicius13<=100){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
arTarp50ir100(skaicius13)
//18 ar skaicius yra neigiamas
console.log('18 uzduotis')
let skaicius14=-5
function arNeigiamas(skaicius14){
    if(skaicius14<0){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
arNeigiamas(skaicius14)

//19 ar skaicius yra neigiamas ar teigiamas
console.log('19 uzduotis')
let skaicius15=-5
function arNeigiamasTeigiamas(skaicius15){
    if(skaicius15<0){
        console.log('Neigiamas')
    }else if(skaicius15>0){
        console.log('Teigiamas')
    }else{
        console.log('Nulinis')
    }
}
arNeigiamasTeigiamas(skaicius15)
//20 ar didesnis ar lygus 18

console.log('20 uzduotis')
let skaicius16=18
function arDidesnisArLygus18(skaicius16){
    if(skaicius16>=18){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
arDidesnisArLygus18(skaicius16)
//21 ar perduotas zodis 'labas'
console.log('21 uzduotis')
let zodis5='labas'
function arZodisLabas(zodis5){
    if(zodis5==='labas'){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
arZodisLabas(zodis5)
//22 ar zodis ilgesnis uz 5
console.log('22 uzduotis')
let zodis6='labas'
function arIlgesnisUz5(zodis6){
    if(zodis6.length>5){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
arIlgesnisUz5(zodis6)
//23 grazinti pirma zodzio raide
console.log('23 uzduotis')
let zodis7='labas'
function pirmaRaide(zodis7){
    return zodis7[0]
}
console.log(pirmaRaide(zodis7))
//24 grazinti paskutine zodzio raide
console.log('24 uzduotis')
let zodis8='labas'
function paskutineRaide(zodis8){
    return zodis8[zodis8.length-1]
}
console.log(paskutineRaide(zodis8))
//25 ar prasideda raide "A"
console.log('25 uzduotis')
let zodis9='Arbuzas'
function prasidedaRaideA(zodis9){
    if(zodis9[0]==='A'){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
prasidedaRaideA(zodis9)
//26 grazinti zodzio ilgi
console.log('26 uzduotis')
let zodis10='labas'
function zodzioIlgis(zodis10){
    return zodis10.length
}
console.log(zodzioIlgis(zodis10))
//27 grazinti 'trumpas' ar 'ilgas'. ilgas jei 7 ir daugiau, trumpas 6 ir maziau
console.log('27 uzduotis')
let zodis11='labas'
function trumpasIlgas(zodis11){
    if(zodis11.length>=7){
        return 'ilgas'
    }else{
        return 'trumpas'
    }
}
console.log(trumpasIlgas(zodis11))
//28 ar du zodziai vienodi
console.log('28 uzduotis')
let zodis12='labas'
let zodis13='labas'
function arZodziaiVienodi(zodis12,zodis13){
    if(zodis12===zodis13){
        console.log('Taip')
    }else{
        console.log('Ne')
    }
}
arZodziaiVienodi(zodis12,zodis13)
//29 'diena' ar 'naktis'
console.log('29 uzduotis')
let zodis14=22
function dienaArNaktis(zodis14){
    if(zodis14>=6 && zodis14<=18){
        console.log('diena')
    }else{
        console.log('naktis')
    }
}
dienaArNaktis(zodis14)
//30 patikrinti skaiciau verte:a)teigiamas b)neigiamas c)nulinis d)didesnis uz 100 e)mazesnis uz 100
console.log('30 uzduotis')
let skaicius17=5
function skaiciausVerte(skaicius17){
    if(skaicius17>0){
        console.log('esu teigiamas')
    }else if(skaicius17<0){
        console.log('esu neigiamas')
    }else{
        console.log('esu nulinis')
    }
    if(skaicius17>100){
        console.log('didziulis skaicius')
    }else{
        console.log('esu maziukas')
    }
}
skaiciausVerte(skaicius17)
