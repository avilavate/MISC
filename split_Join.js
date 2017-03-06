function split(arr) {
    var lenArr = [];
    arr.map((i) => {
        if (Array.isArray(i)) {
            if (i.length > 0) lenArr.push([i.length]);
        }
    })
    return [[].concat.apply([], arr), lenArr];
}

function join(arr1, arr2) {
    var arr = [];
    arr2.map((len) => {
        var inner = [];
        for (var i = 0; i < len; i++) {
            inner.push(arr1[i]);
        }
        arr1.splice(0, len);
        arr.push(inner);
    });
    return arr;
}

var arr1=[1,2,3,4,5,6,7,8,9,10],  arr2=[[1],[2],[3],[4]];
console.log(join(arr1,arr2) );
//, [[1],[2,3],[4,5,6],[7,8,9,10]]