function danspower(num, power) {
    var res = 0;
    if (num === 0 || power === 0) return 0;
    num = Math.pow(num, power);
    num = num % 2 !== 0 ? (num < 10 ? 0 : ((num) => {
        var i = 0; num1 = num;
        while (!num.toString().endsWith("0")) { num++; i++ } return i === 5 ? num : i < 5 ? num : num1 - i;
    })(num)) : num;
    return num
}
console.dir(danspower(9, 2));