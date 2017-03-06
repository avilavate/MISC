interface FakeEvent {
    type: string;
}
interface FakeEventHandler {
    (e: FakeEvent): void;
}
class FakeWindow {
    onMouseDown: FakeEventHandler = (a: FakeEvent) => {
        console.log(a.type);
    };
}
const fakeWindow = new FakeWindow();
fakeWindow.onMouseDown({ type: "Clicked" });