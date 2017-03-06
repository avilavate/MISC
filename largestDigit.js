function solution(digits) {
    digits = digits.toString();
    var prefix = digits.substring(0, digits.length - 4);
    prefix = prefix.split("").sort((a, b) => { return b - a; });
    console.log(prefix);
    return Number.parseInt(digits.substring(digits.indexOf(prefix[0]), digits.indexOf(prefix[0]) + 5));
}

console.log(solution(6341289987));