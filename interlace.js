function combineStrings() {
    arguments = Array.from(arguments);
    var res = "", biggest = arguments.reduce(function (prev, current) {
        return (prev.length > current.length) ? prev : current
    });

    console.log(arguments);
    for (var t = 0; t < arguments.length; t++) {
        var c = biggest.length - arguments[t].length;
        while (c) {
            c--;
            arguments[t] = arguments[t].concat(" ");
        }
    }
    for (var i = 0; i < biggest.length; i++) {
        arguments.forEach((ele) => { res += ele[i] });
    }
    return res.replace(" ", "");
}

console.log(combineStrings('abcd', '123'));