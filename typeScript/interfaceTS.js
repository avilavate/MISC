function callServer(callback) {
    callback(null, 'hi');
}
callServer(function (e, d) { console.log(d); }); // 'hi'
//callServer('hi'); 
//# sourceMappingURL=interfaceTS.js.map