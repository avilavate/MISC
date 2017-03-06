var a = { type: "Avil" };
var NotAnAction = (function () {
    function NotAnAction(name) {
        this.type = name;
    }
    return NotAnAction;
}());
a = new NotAnAction("Avate");
console.log(a.type);
//# sourceMappingURL=shapesTS.js.map