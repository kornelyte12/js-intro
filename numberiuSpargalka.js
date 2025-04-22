
// Konstantos pavadinimas	Aprašymas
// Number.EPSILON	Mažiausias atstumas tarp dviejų atskirai atvaizduojamų skaičių. Naudinga lyginant slankiojo kablelio reikšmes.
//Number.MAX_SAFE_INTEGER	Didžiausias saugus sveikasis skaičius: 2^53 - 1 (9007199254740991).
//Number.MIN_SAFE_INTEGER	Mažiausias saugus sveikasis skaičius: -(2^53 - 1) (-9007199254740991).
//Number.MAX_VALUE	Didžiausia teigiama reikšmė, kurią galima pavaizduoti. Didesnės → Infinity.
//Number.MIN_VALUE	Mažiausia teigiama (bet ne nulinė) reikšmė. Arčiausiai nulio.
//Number.NaN	Speciali reikšmė „Not a Number“ („ne skaičius“) – dažnai gaunama iš neteisingų matematinių operacijų.
//Number.NEGATIVE_INFINITY	Neigiama begalybė. Gaunama, kai įvyksta perpildymas ar padalijama iš nulio (neigiamai).
//Number.POSITIVE_INFINITY	Teigiama begalybė. Gaunama dėl perpildymo ar dalybos iš nulio.
//🧠 Statiniai metodai

//Metodas	Paskirtis
//Number.isFinite(value)	Tikrina, ar reikšmė yra baigtinis skaičius (ne Infinity, -Infinity ar NaN).
//Number.isInteger(value)	Tikrina, ar reikšmė yra sveikasis skaičius.
///Number.isNaN(value)	Tikrina, ar reikšmė yra NaN.
//Number.isSafeInteger(value)	Tikrina, ar reikšmė yra „saugus“ sveikasis skaičius (tarp ± 2^53 - 1).
//Number.parseFloat(value)	Konvertuoja eilutę į slankiojo kablelio skaičių.
//Number.parseInt(value)	Konvertuoja eilutę į sveikąjį skaičių.
//🔄 Egzemplioriaus metodai (naudojami su skaičių objektais)

//Metodas	Paskirtis
//toExponential()	Paverčia skaičių į mokslinę (eksponentinę) formą kaip eilutę.
//toFixed()	Suapvalina skaičių iki nurodyto skaičiaus skaitmenų po kablelio.
//toLocaleString()	Grąžina lokalizuotą skaičiaus eilutę (pvz., su kableliais ar taškais pagal šalį).
//toPrecision()	Grąžina skaičių kaip eilutę su nurodytu reikšmingų skaitmenų kiekiu.
//toString([radix])	Paverčia skaičių į eilutę, galima nurodyti skaičiavimo sistemą (pvz., 2 – dvejetainė).
//valueOf()	Grąžina pirminę skaitinę reikšmę iš Number objekto. 