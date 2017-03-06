function dashatize(num) {
    if (!Number.isInteger(num)) return Nan;
    var res = "";
    num = num < 0 ? 0 - num : num;
    num.toString().split("").forEach((i) => {
        res += i % 2 === 0 ? i : "-" + i + "-";
    })
    res = res.startsWith("-") ? res = res.substring(1, res.length) : res;
    res = res.endsWith("-") ? res = res.substring(0, res.length - 1) : res
    return res.replace(/--/g, "-");
};

console.log(dashatize(-1));
//28-3-6-9