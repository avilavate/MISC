var sum_pairs = function (ints, s) {
    var res = [];
    for (var o = 0; o < ints.length; o++) {
        for (var i = o + 1; i < ints.length; i++) {
            if (ints[i] + ints[o] === s) {
                res.push({ o, i })
                break;
            }
        }
        if (res.length>0 ) break;
    };
    if (res.length < 1) return undefined;
    var indexes = res.sort((a, b) => {
        return a.i - b.i;
    });

    return [ints[indexes[0].o], ints[indexes[0].i]];
}
console.log(sum_pairs([1, 2, 3, 4, 1, 0], 2));