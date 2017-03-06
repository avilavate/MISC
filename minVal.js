function dontGiveMeFive(start, end) {
    var res = 0;
    for (var i = start; i < end; i++) {
        if (i.toString().indexOf('5') > -1)
            continue;
        res++;
    }
}