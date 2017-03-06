function digitize(n) {
    var revStr = n.toString().split("").reverse(), res = [];
    for (var i = 0; i < revStr.length; i++) {
        res.push(parseInt(revStr[i]));
    }
    return res;
}

console.log(digitize(234523));
