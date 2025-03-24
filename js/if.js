/*
IF - palyginimo salyga
Palyginimo operatoriai:
-visi:< , > , <= , >= , == , != , === , !==
- naudotini: < , > , <= , >= , === , !==
- nenaudotini: == , !=

kodo sablonai:
if () {}
if () {} else {}
if () {} else if()
if () {} else if () else {}


*/
if(4 > 2) {
    console.log('taip')
}
// Rezultatas: taip

if (4 < 2) {
    console.log('---taip')
} else{
    console.log('---ne')
}
const temp = 10
if (temp > 18) {
    console.log('silta')
}else{
    console.log('salta')
}

// jei zemiau 0 - salta
//jei zemiau 10 - meh
//jei zemiau 22 - silta
//jei daugiau - karsta

const temp2 = 23
if (temp2<0){
}else if (temp2<10){
    console.log('meh')
}else if (temp2<22){
    console.log('silta')
}else if (temp2>=22){
    console.log('karsta')}
