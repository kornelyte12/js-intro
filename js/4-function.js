function empty() {
    // logika
}

const a = empty();
const b = empty();
console.log(a);
console.log(b);

console.log(empty());

function penki() {
    return 5;
}

const c = penki();
console.log(c);

function hi() {
    return 'Labas!';
}

const d = hi();
console.log(d);

//Jonas -> Labas, Jonas
//Maryte -> Labas, Maryte
//Petras -> Labas, Petras
//Ona -> Labas, Ona
function hiPerson(name){
    return `Labas, ${name}`
}
    console.log(hiPerson('Jonas'))
    console.log(hiPerson('Maryte'))
    console.log(hiPerson('Petras'))
    console.log(hiPerson('Ona'))

    // 2+2=4
    //7+5=12
    function sum() {
        return 0
    }

    const e = sum(2,2)
    console.log(e)

 const f = sum(7,5)
 console.log(f)

 // 100-> 121 Eur
 // 200-> 242 Eur
 //73-> 88,33 Eur

 function priceWithVat(price){
    const updatedPrice = price * 1.21
    return updatedPrice * 1.21 + ' Eur'
 }
 const p1 = priceWithVat(100)
 console.log(p1)
 const p2 = priceWithVat(200)
 console.log(p2)
    const p3 = priceWithVat(73)
    console.log(p3)
 

    console.clear()

    // Jonas->Zodis "Jonas" yra sudarytas is 5 raidziu.
    // Maryte->Zodis "Maryte" yra sudarytas is 6 raidziu.
    // Petras->Zodis "Petras" yra sudarytas is 6 raidziu.
    // Ona->Zodis "Ona" yra sudarytas is 3 raidziu.

    function nameLength(name){
        const length = name.length
        return `Zodis "${name}" yra sudarytas is ${length} raidziu.`
    }
    const nl1 = nameLength('Jonas')
    console.log(nl1)
    const nl2 = nameLength('Maryte')
    console.log(nl2)
    const nl3 = nameLength('Petras')
    console.log(nl3)
    const nl4 = nameLength('Ona')
    console.log(nl4)


    // 5   -> Gautas skaicius: 5.
// -13 -> Gautas skaicius: -13.
// 777 -> Gautas skaicius: 777.

function gotNumber(n) {
    // return 'Gautas skaicius: ' + n + '.';
    return `Gautas skaicius: ${n}.`;
}

const gn1 = gotNumber(5);
const gn2 = gotNumber(-13);
const gn3 = gotNumber(777);

console.log(gn1);
console.log(gn2);
console.log(gn3);
//2,2 ->2+2=4
//7,5 ->7+5=12
//-7,15 -> -7+15=8
function sum(a, b) {
    return `${a}+${b}=${a + b}`;
}
console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));

