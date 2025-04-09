const mokinys1= ['Tadas',8,9,10,4,7]
const mokinys2= ['Ona',8,9,10,7,7]
const mokinys3= ['Ruta',8,9,6,4,7]
const mokinys4= ['Zina',8,4,10,4,7]
const mokinys5= ['Jonas',8,9,10,5,7]
function mokinioVidurkis(mokinys)
{
    console.log('Mokinio vardas'+mokinys[0])
    console.log('Mokinio vardas'+mokinys[1])
    console.log('Mokinio vardas'+mokinys[2])
    console.log('Mokinio vardas'+mokinys[3])
    console.log('Mokinio vardas'+mokinys[4])
    //3.2


  let vidurkis= (mokinys[1]+mokinys[2]+mokinys[3]+mokinys[4]+mokinys[5])/5
  if(vidurkis>=3,45)
  {
    console.log(mokinys[0]+'islaike.Jo vidurkis:'+vidurkis)

  } else
  {
    let vidurkisNaujas =((vidurkis*5)+10)/6;
console.log =(mokinys[1]+ 'neislaike. jo dabartinis vidurkis'+ vidurkis)
  if(vidurkisNaujas>=3,5)
    console.log(mokinys[1].lenght) //isvest ilgi
  }
/////???????

}
mokinioVidurkis(mokinys1)
mokinioVidurkis(mokinys2)
mokinioVidurkis(mokinys3)
mokinioVidurkis(mokinys4)
mokinioVidurkis(mokinys5)


let atvirukoTekstas= 'labai geras daiktas yra televizorius as su juo galiu matyti jus';
let=atvirukoRaide='a';
let atvirukoSuma=0;
for(let i=0;i<atvirukoTekstas.length;i++){
  if(atvirukoTekstas[i]===atvirukoRaide){
 atvirukoRaide+=1;
  }
}
function atvirukoLipdukai(Raide){
  atvirukoSuma=0
  for(let i=0;i<atvirukoTekstas.length;i++){
    if(atvirukoTekstas[i]===Raide){
      atvirukoSuma+=1;
    }
  }
return atvirukoSuma;
}


console.log(atvirukoLipdukai('a'));

const atvirukoBalses=['a','e','o','u','i'];

for(let i=0; i<atvirukoBalses.length;i++){
  console.log('Raide'+ atvirukoBalses[i]+'pasikartoja'+ atvirukoLipdukai(atvirukoBalses[i]))
}


//sukurti sarasa

let miestai11=[
  {miestas:('Kaunas', 89.6)},
  {miestas:('Klaipėda', 307.3)},
  {miestas:('Šiauliai', 213)},
  {miestas:('Panvėžys', 136)},
  {miestas:('Molėtai', 65)},
  {miestas:('Anykščiai', 114)},
  {miestas:('Prienai', 97)},
  {miestas:('Varėna', 83)},
  {miestas:('Marijampolė', 162)},
  {miestas:('Jonava', 92)},
  {miestas:('Vilnius', 0)}]
  //a
  function kurTolimiausiai (miestai, greitis, laikas)
  {
      let maxA = 0;
      let kelias = greitis * laikas;
      let maxM = 0;
  
      for(let i = 0; i<miestai.length; i+=2)
      {
          //console.log(miestai[i]);
          if(miestai[i+1]<= kelias && miestai[i+1]> maxA)
          {
              maxA = miestai[i+1];
              maxM = i;
          }
      }
      console.log(miestai[maxM] + ' ' + miestai[maxM+1]);
  
  }
  
  kurTolimiausiai(miestai11,80,2)
  
  
  
  function ArSpetume (miestai, miestas, laikas) //s = v*t 
  {
  
      for(let i = 0; i<miestai.length; i+=2)
      {
          if(miestai[i]===miestas)
          {
              if(miestai[i+1]/laikas <= 120)
              {
                  console.log("spesim " + miestai[i+1]/laikas)
              }
          }
          else
          {
              console.log("miesto neradau")
          }
      }
  }
  
  ArSpetume(miestai11, 'marijampolė', 2)
  
  
  function ArUzteks (miestai, pinigai, Kkaina, deginam)
  {
      let kuras = 30 + pinigai/Kkaina;
      let atstumas = kuras / deginam;
      let maxA = 0
      let maxM = 0
      for(let i = 0; i<miestai.length; i+=2)
          {
              //console.log(miestai[i]);
              if(miestai[i+1]<= atstumas && miestai[i+1]> maxA)
              {
                  maxA = miestai[i+1];
                  maxM = i;
              }
          }
  
      console.log(miestai[maxM] + ' ' + maxA)
  
  }
  
  ArUzteks(miestai11, 10, 0.5, 0.5)
  
  
  const KelioSalygos = ['geras', 'prastas', 'taisomas', 'prastas'];
  
  function realusLaikas (miestai, salyga)
  {
  for(let i = 0; i<miestai.length; i+=2)
      {
          if(salyga[i/2]==='geras')
          {
              console.log(miestai[i+1])
          }
          if(salyga[i/2]==='prastas')
              {
                  console.log(miestai[i+1]*1.5)
              }
              if(salyga[i/2]==='taisomas')
                  {
                      console.log(miestai[i+1]*2)
                  }
      }
  }
  
  realusLaikas(miestai11, KelioSalygos)
  
  
  // parasyti funkcija,kuri apskaiciuotu kiek sveikuju,teigiamu skaiciu yra tam tikru skaiciu ir isvestu rezultata grafiskai
  let sarasas=[1,1,2,3,3,3,4];
  let skKiekis=0;
  function skaiciuoti(sarasas){
      for(let i=0;i<sarasas.length;i++){
          if(sarasas[i]>0){
              skKiekis++;
          }
      }
      console.log(`sveikuju skaiciu yra ${skKiekis}`)
      for(let i=0;i<skKiekis;i++){
          console.log('*')
      }
  }
  
  
  

  

