function minValue(arr, n) {
    var last = arr.length % n,chunks = (arr.length - last) / n, pcs = [];
    for (var i = 0; i < arr.length-last; i += n) {
        pcs.push(arr.slice(i==0?0:i-1, i + n ));
    }
    pcs.push(arr.slice(arr.length-last-1))
    return pcs.map((i)=>{return i.sort()[0];})
}


console.log(minValue([1,2,3,10,-5],2));