//Conceptos básicos de TypeScript para usar Angular

// Características de TypeScript
// Tipado de datos: Indicar tipo de dato de una variable.

const empresa: string = 'Platzi';
const id: number = 12;

// Inferencia de tipos: Declaración de variables sin especificar el tipo.

const empresa_1 = 'Platzi';

//TS automáticamente detectará que la variable es un string y evitará asignar otro tipo de dato. 


//Doble tipado: Asignación de dos tipos de datos a una misma variable.

const empresa_2: string | number = 'Platzi';

//Funcion tipada
const sum = (a: number, b: number) => {
    return a+b;
}

sum(15+6, 9);

//-------------------------------------------------

// class Person{
//     age: number;
//     lastName: string;

//     constructor(age:number, lastName:string){
//         this.age = age;
//         this.lastName = lastName;
//     }
// }

class Person{
    constructor(public age:number, lastName:string){}
}

const geordie = new Person(27, 'Geordie');
geordie.age










