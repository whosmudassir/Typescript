export {}
let hello="my name is mudassir"
console.log(hello)

// variable types
let name : string = "mudassir";
let line : string = `Iam ${name} and a beginner in TS`
console.log(line)

//Array types
let x : Array<number> = [1,2,3]
console.log(x)

//tuple
let tuple : [string,number ] = ["mk", 10]
 
//enum
enum Color { red=5, blue, green}
let y : Color = Color.blue;
console.log(y)

let z : any = 10;
z=true;
z="mk";
console.log(z);

//or condition
let i : number | string ;
i = 20;
i = "Mk";
console.log(i)

// ? optional property
function num (first : number ,second?: number){
   if (second){return first + second }else{return first}
}

let res=num(8,10)
console.log(res)

//interface
interface Person {
    firstname : string;
    secondname ?: string;
}

function myname (person : Person){
    console.log(`Iam ${person.firstname} ${person.secondname}`)
}

let userone = {
    firstname : "Bruce"
    
}

myname(userone)

//classes
class Empolyee {
   name:string;
    constructor(user:string){
        this.name=user
    }
    Login(){
        console.log(this.name)
    }
}

//class inheritance
class Manager extends Empolyee{
    constructor(managername:string){
super(managername)
    }
}

let some=new Empolyee("thisis mudassir")
let mange=new Manager("My name is manager")
some.Login()
mange.Login()