function splitTheBill(x) {
    var total = 0, keys = Object.keys(x), res = {};
    for (var i = 0; i < keys.length; i++)
        total += x[keys[i]];

    var each = total / keys.length;
    for (var i = 0; i < keys.length; i++)
        res[keys[i]] = parseFloat(x[keys[i]] - each).toFixed(2) * 1;
    return res;
}

console.log(splitTheBill({ A: 20, B: 15, C: 10 }));