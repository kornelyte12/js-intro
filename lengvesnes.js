
//1 0-15 rasti intervalo suma
//let suma=0
//for(let i=5;i<=15;i++);
//{
    //suma+=i[index]
//return suma}

//2 isvesti po viena raide zodzio 'vakaras'

let zodis="Vakaras";

for(let i=0;i<zodis.length;i++){
    console.log(zodis[i]);
}

//3 seseto daugybos lentele
for (let i = 1; i <= 10; i++) {
    console.log(`6 * ${i} = ${6 * i}`);}

//4 nuo 5 iki 1 ir vietoj 0 rasom boom

for(i=5;i>=1;i--);{
        console.log(i)
        if(i===0){
            console.log('BOOM')
        }
    }
console.log(i)

//5 nuo 3 iki 18 sudeti visus lyginius
let suma=0
for(let i=3;i<=18;i++);{
    console.log(i);
    if(i%2===0){
        suma += i
    }
}console.log(suma)

//6  kad isvestu visa sarasa i console
let sarasas=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<=sarasas.length;i++){
    console.log(sarasas[i]);
}


//7  isvesti vardus
let vardai=['Ana','Ema','Lana','Luna'];
for(let i=0;i<=vardai.length;i++){
    console.log('Mano vardas":'+vardai[i]);
}