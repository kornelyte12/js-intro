/*
BOOLEAN - logine reiksme
-true
-falls

loginiai operatoriai:
- && - ir
- || - arba
*/
const isEven = true
const isOdd = false
const a = true && true
const b = true && false
const c = false && true
const d = false && false

const a1 = true || true
const b1 = true || false
const c1 = false || true
const d1 = false || false

console.clear
const arGrazus = true
const arTurtingas = false

console.log(arGrazus && arTurtingas)

console.clear
const arGrazi = true
const arTurtinga = false

console.log(arGrazi || arTurtinga)
console.clear()

console.log(1, true && true|| false)
console.log(2, true && false|| true)
console.log(3, false && true|| true)
console.log(4, false && false|| true)
console.log(5, false && false|| false)
console.log(6, true && true|| true)
console.log(7, true && false|| false)
console.log(8, false && true|| false)


