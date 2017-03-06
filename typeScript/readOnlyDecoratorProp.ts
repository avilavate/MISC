class Demo {
    @readonly
    name: string;
}

function readonly(target, key) {
    Object.defineProperty(target, key, { writable: false })
}

var D = new Demo();
D.name = "new value";
console.log(D.name);

let ab:Function=()=>{return;}

