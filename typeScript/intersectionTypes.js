function Attack(warrier) {
    warrier.Kick(10);
    warrier.Punch(20);
    // warrier.Cando();
}
var KickerPuncherClass = (function () {
    function KickerPuncherClass() {
        this.Kick = function (speed) { return console.log("Kick speed", speed); };
        this.Punch = function (speed) { return console.log("Punch speed", speed); };
    }
    return KickerPuncherClass;
}());
Attack(new KickerPuncherClass());
//# sourceMappingURL=intersectionTypes.js.map