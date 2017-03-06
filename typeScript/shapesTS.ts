interface Action{
    type:string;
}

let a:Action ={type:"Avil"}

class NotAnAction{
    type:string;
    constructor(name:string){
        this.type=name;
    }
}

a= new NotAnAction("Avate");

console.log(a.type);