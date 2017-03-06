interface Callback {
(error: Error, data: any): void;
}
function callServer(callback: Callback) {
callback(null, 'hi');
}
callServer((e,d)=>{console.log(d);}); // 'hi'
//callServer('hi');