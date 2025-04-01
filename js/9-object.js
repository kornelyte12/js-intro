// object-objektas, panasus i hashmap,dictionary

const empty={};
console.log(empty);


const person={
    age:99,
    name: 'Jonas',
    isMarried:true,
};
console.log(person);


//sveiki mano vardas x.
console.log(`sveiki mano vardas ${person['name']}`);

//man yra x met
console.log(`man yra ${person['age']}metu.`);

console.log(['isMarried']);

// supaprastinta sintakse ne visur veikia bet svariau, geriau standartas
console.log(person.age)
console.log(person.name)
console.log(person.isMarried)

const demo={
    'color':'red',
    '5':777,
    'is married': true,
}
console.log(demo['color'])
console.log(demo['5'])
console.log(demo[5])
console.log(demo['is Married'])

const pc={
    cpuCores:8,
    ram:16,
    diskSpace:512,
    diskType:'ssd',
    os:'win10',

}
console.log(pc.cpuCores);

pc.ram=32;
console.log(pc);


pc.os='win98';
console.log(pc);

//this pc has x cores

const s1=(`this pc has${pc.Cores}cores`);
const s2=(`this pc has${pc['cpuCores']}cores`);
console.log(s1)
console.log(s2)


const student={
    name:'Maryte',
    age:88,
    isMarried:false,
    phoneNumbers:[],
    parents:[
        {
            name:'Petras',
            age:77,
            phoneNumbers:[111111,33333],

        },
        {
            name:'Ona',
            age:66,
            phoneNumbers:[22222222,44444],
            
        },

    ],
};

   console.log (student.phoneNumbers.lenght);
   console.log (student.parents.lenght);
   console.log (student.parents[0].name);
   console.log (student.parents[1].name);
   console.log (student.parents[0].phoneNumbers.length);
   console.log (student.parents[1].phoneNumbers.length);
   console.log (student.parents[1].phoneNumbers[1]);

   console.clear();

   const name='Jonas';
   const age=99;
   const isMarried=true;

   const name1='Maryte';
   const age1=88;
   const isMarried1=false;

//      name, age, isMarried
   const student1=['Jonas',99,true];
   const student2=['Maryte',88,false];
   const student3=['Petras',false,77];
   const student4=[true,66,'Ona'];
   const stud1={
    name:'Jonas',
    age:99,
    isMarried:true,
   };
   const stud2={
    age:88,
    isMarried:false,
    name:'Maryte',
   };
   console.log(stud1.name);
   console.log(stud2.name);


   