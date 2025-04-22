//🏗️ Konstruktorius
//String()
//Sukuria naują String objektą. Gali būti naudojamas ir be new – grąžina simbolių eilutę.

//⚙️ Statiniai metodai

//Metodas	Paskirtis
//String.fromCharCode(...codes)	Grąžina eilutę, sudarytą iš pateiktų Unicode reikšmių.
//String.fromCodePoint(...codePoints)	Leidžia naudoti ir simbolius, kurie užima daugiau nei 16 bitų.
//String.raw()	Naudojamas šabloninėms eilutėms – grąžina "neapdorotą" tekstą (su visais \n, \t, ir t.t.).
//🧬 Egzemplioriaus savybės

//	Aprašymas
//	Eilutės ilgis – simbolių skaičius.
// Egzemplioriaus metodai

//Metodas	Paskirtis
//(index)	Grąžina simbolį pagal indeksą (gali būti ir neigiamas).
//charAt(index)	Grąžina simbolį nurodytoje pozicijoje.
//charCodeAt(index)	Grąžina simbolio Unicode reikšmę (0–65535).
//codePointAt(index)	Grąžina Unicode kodo tašką – tinka simboliams už BMP ribų.
//concat(...strings)	Sujungia eilutes į vieną.
//includes(substring)	Patikrina, ar eilutė turi tam tikrą poeilutę.
//endsWith(suffix)	Tikrina, ar eilutė baigiasi tam tikra poeilute.
//indexOf(substring)	Grąžina pirmą poeilutės pasirodymo indeksą arba -1.
//lastIndexOf(substring)	Grąžina paskutinį poeilutės pasirodymo indeksą.
//localeCompare(otherString)	Palygina dvi eilutes pagal lokalę.
//match(regex)	Ieško atitikmenų pagal reguliarųjį reiškinį.
//matchAll(regex)	Grąžina iteratorių su visais atitikmenimis.
//normalize([form])	Normalizuoja simbolius (naudinga su diakritiniais ženklais).
//padEnd(targetLength, padString)	Prideda simbolius eilutės gale iki nurodyto ilgio.
//padStart(targetLength, padString)	Prideda simbolius pradžioje.
//repeat(count)	Kartoja eilutę nurodytą kartų skaičių.
//replace(search, replacement)	Pakeičia pirmą (arba visas) poeilutes kita.
//replaceAll(search, replacement)	Pakeičia visas poeilutes.
//search(regex)	Grąžina pirmo atitikmens pagal regex indeksą.
//slice(start, end)	Išskiria dalį eilutės.
//split(separator, limit)	Padalina eilutę į masyvą pagal skyriklį.
//startsWith(prefix)	Tikrina, ar eilutė prasideda tam tikra poeilute.
//substring(start, end)	Grąžina poeilutę tarp start ir end indeksų.
//toLowerCase()	Paverčia visus simbolius mažosiomis raidėmis.
//toUpperCase()	Paverčia simbolius didžiosiomis raidėmis.
//toLocaleLowerCase()	Kaip toLowerCase(), bet su lokalės palaikymu.
//toLocaleUpperCase()	Kaip toUpperCase(), bet su lokalės palaikymu.
//toString()	Grąžina pačią eilutę (naudojamas automatiškai).
//trim()	Pašalina tarpelius iš pradžios ir pabaigos.
//trimStart() / trimLeft()	Pašalina tarpelius tik iš pradžios.
//trimEnd() / trimRight()	Pašalina tarpelius tik iš pabaigos.
//valueOf()	Grąžina pirminę simbolių eilutę.
