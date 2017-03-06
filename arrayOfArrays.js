function getLengthOfMissingArray(arrayOfArrays) {
    return arrayOfArrays.length > 0 ?
        arrayOfArrays.map((i) => { return i.length > 0 ? i.length : null; }).sort((a, b) => { return a - b; }).
            filter((v, i, arr) => { return v + 1 !== arr[i + 1] }).sort((a, b) => { return a - b; })[0] + 1 : 0;
}
console.log(getLengthOfMissingArray([[4, 3, 0],
[4, 4, 3, 3],
[0, 0, 1, 4, 0, 0],
[1, 4, 1, 4, 2, 2, 3],
[4, 1, 1, 2, 4, 0, 0, 3],
[4, 0, 0, 4, 3, 2, 0, 3, 3],
[4, 2, 2, 3, 2, 2, 0, 1, 0, 0, 4],
[0, 1, 2, 0, 1, 3, 2, 2, 0, 3]]));