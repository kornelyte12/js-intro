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