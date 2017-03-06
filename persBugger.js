function persistence(num) {
    if (num.toString().length === 1) return 0;
    var res = 1;
    if (num.toString().length === 1) return num;
    else {
        num.toString().split("").forEach((i) => { res *= parseInt(i); return res; })
        num = res;
    }
    return num.toString().length === 1 ? num : persistence(num);
}

console.log(persistence(25))