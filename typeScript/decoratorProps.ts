class Test {
    @Override(1) // invokes Override, which returns the decorator
    name: number = 1;
}


function Override(label:number) {
    return function (target: any, key: string) {
        console.dir(target, key);
            Object.defineProperty(target, key, { configurable: false,value:++label });
    }
}

let T = new Test();

console.log(T.name);