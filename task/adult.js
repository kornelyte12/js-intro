/*reikalinga funkcija kuri gauna vartotojo amziu(metais) ir titinkamai grazina zodis:
-suages
-vaikas
amziaus ribos kriterijus: >=18 metu.
*/

function isAdult(age){
   if(age>=18){
    return suauges;
   } else {
    return vaikas;
   }
}
console.log(isAdult(18), '--->' , 'suauges')
console.log(isAdult(18), '--->' , 'vaikas')
console.log(isAdult(17), '--->' , 'vaikas')
console.log(isAdult(1), '--->' , 'vaikas')

