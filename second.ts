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