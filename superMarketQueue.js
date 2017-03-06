function queueTime(customers, n) {
    var res = 0;
    if (customers.indexOf(n) > -1) {
        var i = 0;
        while (i < customers.indexOf(n)) {
            res += customers[i++]
        }
    } else { res = customers.reduce((a, b) => { return a + b; }),0 };
    return res;
}
console.log(queueTime([ 1, 2, 3, 4, 5 ] ,100));