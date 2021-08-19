//string type
let doremon: string = 'hello';

//any 
let something : any;
something=10;
something='mudassir';

//or conditon
let either : number | string;
either = 100;
either = 'khan';

//Objects
const obj = {
    myName : 'mudassir',
    myAge : 23,  
}

//array
const arrayname : string [] = ['khan', 'mudassir'];
const somearray : (string | number) [] = ['khan', 23]

//Array of objects
const arrayofobj : {}[] = [{name:'namename', age:23, gender:false},{hello:'hello'}]

//Specific array of objects
const specific : {name:string, age:number, gender:boolean}[]=[{name:'khan', age:23, gender:false}]

//functions
const somefunction = (num1:number,num2:number) =>{
return num1+num2
}

//type for return value in functions
const func=(para1:number , para2:number):number =>{
    return para1 +para2
}

//Union types
let star : (string | number) = 23;
star = 'khan'

//union types for array
let fly : (string | number | boolean)[] = ['name',23,false]

//union type for obj
let someone : {name:string|number, age:number|boolean} = {name:23,age:true}

//literal types
let literally : 'red' = 'red';
// literally = 'blue' // throws errors

//Interfaces
interface Person{
    name : string,
    age : number,
    gender : boolean
}

const data:Person={
    name:'',
    age:23,
    gender:false
}

//Classes
class People{
    car:string
    model:string
    constructor(car, model){
this.car=car,
this.model=model
    }
}

const lex = new People('tata','23')
