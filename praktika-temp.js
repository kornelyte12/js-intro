let pirmadienis=[-4, -2, 0, 2, 4]
let antradienis=[-3, -1, 1, 3, 5]
let treciadienis=[-2, 0, 2, 4, 6]
let ketvirtadienis=[-1, 1, 3, 5, 7]
let penktadienis=[0, 2, 4, 6, 8]
let sestadienis=[-1, 1, 3, 5, 7]
let sekmadienis=[2, 100, 2, 20, 22]

function vidurkis(diena){
  let suma=0
  let vidurkis1=0
  for (let i=0;i<diena.length;i++){
    suma+=diena[i]
  }
  vidurkis1=suma/5
  return vidurkis1
}
console.log(vidurkis(pirmadienis, antradienis, treciadienis, ketvirtadienis, penktadienis, sestadienis, sekmadienis))
//b

function maxTemp(temperatura){
  let max=temperatura[0]
  for (let i=0;i<temperatura.length;i++){
    if(temperatura[i]>max){
      max=temperatura[i]
    }
  } return max
}
console.log(maxTemp(pirmadienis, antradienis, treciadienis, ketvirtadienis, penktadienis, sestadienis, sekmadienis))
//c
function minTemp(temperatura){
  let min=temperatura[0]
  for (let i=0;i<temperatura.length;i++){
    if(temperatura[i]<min){
      min=temperatura[i]
    }
  } return min
}
console.log(minTemp(pirmadienis, antradienis, treciadienis, ketvirtadienis, penktadienis, sestadienis, sekmadienis))
//d
function minMaxTemp(temperatura){
  let min=temperatura[0]
  let max=temperatura[0]
  for (let i=0;i<temperatura.length;i++){
    if(temperatura[i]<min){
      min=temperatura[i]
    }else if(temperatura[i]>max){
      max=temperatura[i]
    }
  } return min,max
}
console.log(minMaxTemp(pirmadienis, antradienis, treciadienis, ketvirtadienis, penktadienis, sestadienis, sekmadienis))
//e
function savTemp(temperatura){
  let suma=0
  for (let i=0;i<temperatura.length;i++){
    suma+=temperatura[i]
  } return suma/7
}
//f
let krituliai1='debesuota'
let krituliai2='saulėta'
function kaipEitiILauka(diena, krituliai){
    vidurkisSiandien=vidurkis(diena)
  if ( vidurkisSiandien>= 0 && krituliai==='debesuota'){
    return ('pasiimk sketi')
    } else if (vidurkisSiandien<= 0 && krituliai==='saulėta'){
        return ('uzsidek striuke');
    } else if (vidurkisSiandien<=0 && krituliai==='debesuota'){
        return ('pasiimk morka besmegeniui lipdyti');
    } else if (vidurkisSiandien>=20 && krituliai==='sauleta'){
        return ('pasitepk kremu nuo saules');
    } else {
      return ('bus grazi diena');
    }
}
console.log(kaipEitiILauka(pirmadienis, krituliai2));
console.log(kaipEitiILauka(antradienis, krituliai1));
console.log(kaipEitiILauka(treciadienis, krituliai2));
console.log(kaipEitiILauka(ketvirtadienis, krituliai1));
console.log(kaipEitiILauka(penktadienis, krituliai2));
console.log(kaipEitiILauka(sestadienis, krituliai1));
console.log(kaipEitiILauka(sekmadienis, krituliai2));
