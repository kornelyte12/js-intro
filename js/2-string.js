/*
STRING - tekstas, simboliu grandinele
tekstines reiksmes iniciavimas
- viengubos kabutes ''
- dvigubos kabutes ""
- backticks ``
specialieji simboliai 
- \ privercia sekanti simboli buti spausdintinu
- \r (return,kursorius grizta i eilutes pradzia)
- \n (new line, kursorius perkeliamas i nauja eilute)
- \t (tab) sokineja kaip space'as
*/
const a = 'Labas';
console.log(a);

const k1 = "vienguba (') kabute"
console.log(k1)

const k2= 'Dviguba(") kabute.'

//vienguba(') ir dviguba kabutes(")
const name ="jonas"
const surname ="Jonaitis"
const fullName = name + ('')+ surname;
console.log(fullName);
const k12 = 'Vienguba (\') ir + dviguba (") kabutes.';
console.log(k12);

//vienguba (') kabute.
const k3 = "vienguba(\') kabute"
//dviguba
const k4="dviguba(\")kabute"
const backSlsh1 ='\\\\'
const backSlash2="\\\\"
console.log(backSlsh1)
console.log(backSlash2)


/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/
const HTML = '<header>\n\'<img>\n<nav>\n<a></a>\n<a></a>\n<a></a>\n</nav>\n</header>'
console.log(HTML)


console.clear();

const studentName = 'Maryte';
const amount = 8;
// Maryte yra viena is 4 legendiniu studentu.
const student = studentName + ' yra viena/s is ' + amount +' legendiniu studentu.'
// backtick (`) kabute
const b4 = `backtick (\`) kabute.`
const student2 = `${studentName} yra viena/s is ${amount} legendiniu studentu.`
console.log(student2)
console.clear()
const word = 'pomioras'
const wordSymbolsCount = word.length

console.log(word)
console.log(wordSymbolsCount)
const textSize ='aaa    aaa'.length
console.log(textSize)
const space =' '
console.log(space.length)
const pi='3.1415'
console.log(pi.length)
console.clear()

const age = 99
const ageDigitsCount = ('' + age).length
console.log(ageDigitsCount)

const ageDigitalCount2 = age.toString().length
console.log(ageDigitalCount2)
console.clear()
const text = 'Kebabas'
const firstSymbol = text[0]
console.log(firstSymbol)


//zodyje sachmatai pirmoji raide yra s
const game = 'sachmatai'
const gameSentence =`zodyje "${game}"pirmoji raide yra "${game[0]}"`
console.log(gameSentence)
