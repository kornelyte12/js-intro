const marks = [10,2,8,4,6];
const sum = 0;
for (let i=0; i<marks.length; i++){
    const markss = marks[i];
    sum += marks[i];
}   
console.log(sum);
let sum2=0;
for(const mark of marks){
    sum2 += mark;
}
console.log(sum2);

const names=['Tomas', 'Ona', 'Petras', 'Maryte'];
const nameSizes=[];
for(let i=0; i<names.length; i++){
    const name = names[i];
    nameSizes.push(name.length);

}
console.log(nameSizes);
for(const name of names){
    console.log(name);
}

/// names.at(-1) - paskutinis elementas
/// names.at(-2) - priespaskutinis elementas
///split - padalina stringa i array
///join - sujungia array i stringa
///slice - paima array dalis
///splice - paima array dalis ir jas istrina
///concat - sujungia array
///indexOf - grazina indexa
///includes - grazina true arba false
///reverse - apvercia array
///sort - surikiuoja array
///find - grazina pirma elementa kuris atitinka salyga
///findIndex - grazina pirma elementa kuris atitinka salyga
///every - grazina true arba false
///some - grazina true arba false
///forEach - grazina undefined
///map - grazina array
///filter - grazina array
///reduce - grazina array
///reduceRight - grazina array      
///flat - grazina array
///flatMap - grazina array      
///keys - grazina array
///values - grazina array
///entries - grazina array
///fill - uzpildo array

///copyWithin - kopijuoja array
///sort - surikiuoja array
///reverse - apvercia array
///splice - istrina array
///slice - paima array dalis
///concat - sujungia array
