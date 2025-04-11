// 1  parasyti funkcija kuri isvestu skaiciaus faktoriala
let n=5
function faktorialas(n){
    if (n<0){
        return 'negalimas neigiamiems'
    } else if (n===0||n===1){
        return 1;
    }else{
        return n*faktorialas(n-1);
    }
}
console.log(faktorialas(n));

//2 parasyti funkcija kuri apskaiciuotu kiek kartu tam tikra raide pasikartojo zodyje arba sakinyje
let sakinys='labas, kaip laikaisi?';
let raide='a'

function kiekKartuPasikartojoRaide(tekstas,raide){
    let kiekis=0;
    for(let i=0;i<tekstas.length;i++){
        if(tekstas[i].toLowerCase()===raide.toLowerCase()){
            kiekis++
        }
    }
    return kiekis
}
console.log('raide '+raide +'pasikartoja '+kiekKartuPasikartojoRaide(sakinys,raide)+' kartus')

//3 funkcija kuri grazintu visus skaiciaus 3 kartotinius nuo 1 iki 50
function trysKartotiniai(){
    let kartotiniai=[];
    for(let i =1;i<=50;i++){
        if (i%3===0){
            kartotiniai.push(i)
        }
    }
    return kartotiniai;
}
console.log('skaiciaus 3 kartotiniai nuo 1 iki 50', trysKartotiniai())


//4 funkcija kuri patikrintu ar duotas zodis yra palindromas
let zodis="amma";
function arPalindromas(zodis){
    let orgas=zodis.toLowerCase();
    let atvirkscias=orgas.split('').reverse().join('');
    return orgas===atvirkscias;
}
if(arPalindromas(zodis)){
    console.log('zodis '+zodis+' yra palindromas');
}else{
    console.log('zodis '+zodis+'  nera palindromas')
}


//5 funkcija kuri suskaiciu kiek balsiu yra zodyje
let sakinys1="Labas rytas, suraitytas!"

function kiekYraBalsiu(tekstas){
    let balses=['a','ą','e','ė','i','į','y','o','u','ų','ū'];
    let kiekis =0;
    for(let raide of tekstas.toLowerCase()){
        if(balses.includes(raide)){
            kiekis++
        }
    }
    return kiekis;
}
console.log('Balsiu kiekis '+kiekYraBalsiu(sakinys1));


//6 sukurk funkcija kuri visus tarpus tekste pakeicia pabraukimais(underscore)
let sakinys2='smagu tave matyti, uzeik';
function pakeistiIPabraukimus(tekstas){
    return tekstas.replaceAll(' ','_');
}
console.log(pakeistiIPabraukimus(sakinys2));

//7  sukurk funkcija kuri padvigubina visus skaicius masyve 
let skaiciai2=[1,2,3,4,5,6,7,8,9];
function padvigubint(masyvas){
    return masyvas.map(function(skaicius){
        return skaicius*2
    })
}
let padvigubinti= padvigubint(skaiciai2);
console.log('orginalus masyvas: ',skaiciai2);
console.log('padvigubinti skaiciai: ',padvigubinti)


//8 sukurk funkcija kuri suranda ilgiausia zodi sakinyje
let sakinys4='jau greitai bus vasara'
function rastiIlgiausiaZodi(sakinys){
    let zodziai=sakinys4.split(' ');
    let ilgiausias=' ';
    for(let zodis of zodziai){
        if (zodis.length>ilgiausias.length){
            ilgiausias=zodis;
        }
    }
    return ilgiausias
}
console.log('ilgiausias zodis: ',rastiIlgiausiaZodi(sakinys));


//9 funkcija kuri isrikiuoja odzius pagal ilgi didejancia tvarka
let sakinys5='si Balandi daug snigo, labai salta'
function rikiuotiPagalIlgi(sakinys){
    let zodziai=sakinys5.split(' ');
    zodziai.sort(function(a,b){
        return a.length-b.length;
    })
    return zodziai
}
console.log('zodziai pagal ilgi:', rikiuotiPagalIlgi(sakinys5))

//10  funkcija kuri grazina pirma skaiciu masyve kuris dalinasi is 7

function rastiSkaiciuDalinasi7(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 7 === 0) {
            return arr[i];
        }
    }
    return null; 
}
let arr = [1, 2, 5, 14, 20, 28];
let rezultatas = rastiSkaiciuDalinasi7(arr);
console.log(rezultatas);

//11  funkcija kuri priima masyva vardu ir grazina tik tuos kurie prasideda A raide
let vardai = ["Andrius", "Petras", "Aistė", "Jonas", "Aurelijus"];
let rezultatas2 = prasidedaA(vardai);
function prasidedaA(arr) {
    return arr.filter(name => name.charAt(0).toUpperCase() === 'A');
}
console.log(rezultatas2);
//12  funkcija kuri turi sarase rasti skaiciu, kuris jame kartojasi daugiau nei viena karta 
function rastiDublikata(arr) {
    let seen = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return arr[i]; 
        }
        seen.add(arr[i]);
    }
    return null; 
}
let masyvas = [1, 2, 3, 4, 5, 2, 6];
let rezultatas3 = rastiDublikata(masyvas);
console.log(rezultatas3); 


//13  funkcija kuri grazins visus  duoto saraso skaicius, kurie yra tarp dvieju nurodytu reiksmiu[2,5,36,8,15,6] masyvui nurodzius nuo 5 iki 20 intervala, bus grazinama [5,8,15,6]
function sarasoSkaicius(arr, min, max) {
    return arr.filter(num => num >= min && num <= max);
}
let masyvas2 = [2, 5, 36, 8, 15, 6];
let rezultatas4 = sarasoSkaicius(masyvas2, 5, 20);
console.log(rezultatas4);


//14  funkcija kuri is zodziu saraso isrinktu ir grazintu tik tuos zodzius, kuriuose yra e raide
function prasidedaE(arr) {
    return arr.filter(word => word.includes('e') || word.includes('E'));
}
let zodziai = ["miskas", "eiti", "petras", "akmuo"];
let rezultatas6 = prasidedaE(zodziai);
console.log(rezultatas6);