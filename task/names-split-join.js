//finkcija gauna sakini kuris atrodo taip: 'Studentai:jonas,Maryte,peTRas,ONA'
//grazina teisingai parasytus vardus su didziosiomis raidemis ir mazosiomis
//pvz: Studentai:Jonas,Maryte,Petras,Ona


//-pirmiausia isskirti vardus is sakinio
//-sukuriame masyva vardams
//-sukuriame masyva su mazasias raidemis
//- iskaidom i individualius vardus
//-ciklas for (let i = 0; i < names.length; i++) {
//     const name = names[i];
// pasiima pirma raide ir ja padidina ir apjungia i galutini normalu varda
//-apjungti vardus

const names = 'Studentai:jonas,Maryte,peTRas,ONA.';
function correctSentence(text){
    const parts=text.split(': ');//skiria sakini pagal ":"
    const names=parts[1]
    .slice(0,-1)
    .toLowerCase()
    .split(', ');//skiria vardus pagal "." ir paima tik vardus ir visas raides padaro mazosiomis ir iskiria kablelius
    const fixedNames=[];//sukuria masyva su vardais
    for (let i=0; i<names.length; i++){
        const name=names[i];
        names[i]=name[0].toUpperCase()+name.slice(1);//pirmas raide didzioji, o kitos mazosios
        const firstLetter=name[0].toUpperCase();//pirmas raide didzioji
        const restName=name.slice(1).toLowerCase();//kitos mazosios
        names[i]=firstLetter+restName;//sujungia pirma raide su likusiom mazosiom
        names[i]=newName;//sujungia pirma raide su likusiom mazosiom
    }
    return parts[0]+': '+names.join(', ')+'.';//sujungia sakini su vardais
}
console.log(correctSentence('Studentai:Jonas,Maryte,Petras,Ona'));