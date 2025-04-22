//🏗️ Konstruktorius
//Array()
//Sukuria naują masyvo (Array) objektą.

//⚙️ Statinės savybės

//Savybė	Aprašymas
//Array[Symbol.species]	Grąžina Array konstruktorių. Naudojamas kuriant paveldėtus masyvus.
//🧠 Statiniai metodai

//Metodas	Paskirtis
//Array.from()	Sukuria naują masyvą iš iteruojamo arba panašaus į masyvą objekto.
//Array.fromAsync()	Sukuria masyvą iš asinchroninio iteruojamo objekto.
//Array.isArray()	Grąžina true, jei pateikta reikšmė yra masyvas.
//Array.of()	Sukuria masyvą iš bet kokio kiekio argumentų (nepriklausomai nuo jų tipo).
//🧬 Egzemplioriaus savybės

//Savybė	Aprašymas
//Array.prototype.constructor	Objektą sukūrusio konstruktoriaus nuoroda.
//Array.prototype[Symbol.unscopables]	Savybės, ignoruojamos with sakiniuose (nuo ES2015).
//length	Masyvo ilgis – elementų skaičius.
//🔄 Egzemplioriaus metodai

//Metodas	Paskirtis
//at(index)	Grąžina reikšmę pagal indeksą. Gali naudoti neigiamus indeksus.
//concat()	Sujungia masyvus ar reikšmes į naują masyvą.
//copyWithin()	Nukopijuoja dalį masyvo į kitą poziciją tame pačiame masyve.
//entries()	Sukuria iteratorių su [indeksas, reikšmė] poromis.
//every()	Grąžina true, jei visi elementai atitinka sąlygą.
//fill()	Užpildo masyvą viena reikšme nuo nurodyto indekso.
//filter()	Grąžina naują masyvą su elementais, atitinkančiais sąlygą.
//find()	Grąžina pirmą elementą, atitinkantį sąlygą (arba undefined).
//findIndex()	Grąžina pirmo atitinkančio elemento indeksą (arba -1).
//findLast()	Grąžina paskutinį elementą, atitinkantį sąlygą.
//findLastIndex()	Grąžina paskutinio atitinkančio elemento indeksą.
//flat()	"Išlygina" įdėtus masyvus į nurodytą gylį.
//flatMap()	Pritaiko funkciją kiekvienam elementui ir išlygina rezultatą.
//forEach()	Atlieka funkciją su kiekvienu masyvo elementu.
//includes()	Tikrina, ar masyve yra tam tikra reikšmė.
//indexOf()	Grąžina pirmo atitinkančio elemento indeksą.
//join()	Sujungia masyvo elementus į eilutę.
//keys()	Grąžina indeksų (raktų) iteratorių.
//lastIndexOf()	Grąžina paskutinį atitinkančios reikšmės indeksą.
//map()	Grąžina naują masyvą, taikydamas funkciją kiekvienam elementui.
//pop()	Pašalina paskutinį elementą ir jį grąžina.
//push()	Prideda elementų į masyvo galą, grąžina naują ilgį.
//reduce()	Redukuoja masyvą į vieną reikšmę iš kairės į dešinę.
//reduceRight()	Redukuoja masyvą į vieną reikšmę iš dešinės į kairę.
//reverse()	Apverčia masyvo elementų tvarką.
//shift()	Pašalina pirmą elementą ir jį grąžina.
//slice()	Nukopijuoja dalį masyvo į naują masyvą.
//some()	Grąžina true, jei bent vienas elementas atitinka sąlygą.
//sort()	Surūšiuoja masyvą vietoje.
//splice()	Prideda, pašalina ar pakeičia masyvo elementus.
//toLocaleString()	Lokalizuota masyvo ir jo elementų eilutė.
//toReversed()	Grąžina naują masyvą su atvirkštine tvarka.
//toSorted()	Grąžina naują surūšiuotą masyvą (nekeičiant originalo).
//toSpliced()	Grąžina naują masyvą su pakeitimais (nekeičiant originalo).
//toString()	Paverčia masyvą į eilutę.
//unshift()	Prideda elementus į masyvo pradžią.
//values()	Grąžina iteratorių su visomis reikšmėmis.
//with(index, value)	Grąžina naują masyvą su pakeista reikšme pagal indeksą.
//[Symbol.iterator]()	Pagal nutylėjimą – tas pats kaip values().