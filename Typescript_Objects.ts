
// Write a program that creates Objects containing these items.

// let person_Name :string = 'Ariba Abbasi';

// const personName_Array :(string | number)[] = ['Person','Car','Cold Drink'];


interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}

let person :person = {

    age : 18 ,
    name : 'Ariba Abbasi' ,
    nationality : 'Pakistan' ,
    student : true
}

console.log(person);