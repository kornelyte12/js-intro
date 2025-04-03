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


