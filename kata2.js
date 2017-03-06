function stuff(ns, name, value) {
    if (arguments.length === 3) {
        ns = ns || {};
        ns.name = value;
        return ns;
    }
    else if (arguments.length == 2) {
        return arguments[0][arguments[1]];
    }
}
var myStuff = myStuff || {};
console.log(stuff(myStuff, "name", "avil"));
console.log(stuff(myStuff, 'name'));
//console.dir(myStuff);