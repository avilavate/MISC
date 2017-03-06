var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Test = (function () {
    function Test() {
        this.name = 1;
    }
    return Test;
}());
__decorate([
    Override(1) // invokes Override, which returns the decorator
], Test.prototype, "name");
function Override(label) {
    return function (target, key) {
        console.dir(target, key);
        Object.defineProperty(target, key, { configurable: false, value: ++label });
    };
}
var T = new Test();
console.log(T.name);
