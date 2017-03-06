var FakeWindow = (function () {
    function FakeWindow() {
        this.onMouseDown = function (a) {
            console.log(a.type);
        };
    }
    return FakeWindow;
}());
var fakeWindow = new FakeWindow();
fakeWindow.onMouseDown({ type: "Clicked" });
//# sourceMappingURL=type-Inference.js.map