function peaks(arr) {
    var res = [], startplat, endPlat = 0, i = 0, pos = [], peaks = [];
    while (i < arr.length) {
        if (arr[i] === arr[i + 1]) {
            !startplat ? startplat = { 'pos': i, 'value': arr[i] } : null;
            i++;
            continue;
        }
        startplat && arr[i + 1] < startplat.value && arr[startplat.pos - 1] < startplat.value ? () => { pos.push(startplat.pos); peaks.push(startplat.value); i++; startplat = null; continue; } : null
        if (i - 1 >= 0 && i + 1 <= arr.length && arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            pos.push(i); peaks.push(arr[i]);
        }
        i++;
        startplat = null;
    }
    return { pos, peaks };
}

console.log(peaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]));


/*
function pickPeaks(arr){
 var res = [], startplat, endPlat = 0, i = 0;
    while (i < arr.length) {
        if (arr[i] === arr[i + 1]) {
            !startplat ? startplat = { 'pos': i, 'value': arr[i] } : null;
            i++;
            continue;
        }
        if (startplat && arr[i + 1] < startplat.value && arr[startplat.pos - 1] < startplat.value) {
            res.push({ 'pos': startplat.pos, 'value': startplat.value });
            console.log("loop 1", { 'pos': i, 'value': arr[i] });
            i++;
            continue;
        }
        if (i - 1 >= 0 && i + 1 <= arr.length && arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            res.push({ 'pos': i, 'value': arr[i] });
        }
        i++;
        startplat = null;
    }
    var pos = [], peaks = [];
    res.forEach((item) => {
        pos.push(item.pos); peaks.push(item.value);
    })
    return { pos, peaks };
}*/