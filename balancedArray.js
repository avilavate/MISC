function balance(arr1, arr2) {
    if(arr1.length!==arr2.length) return false;
    var sameCounter = (arr) => {
        var schema = [];
        for (var i = 0; i < arr.length; i++) {
            var c = 1;
            while (true) {
                if (i + 1 < arr.length && arr[i] === arr[i + 1]) {
                    c = c + 1;
                    i = i + 1;
                }
                else {schema.push(c); break; }
            }
        }
        console.log(schema);
        return schema.sort();
    }
    return sameCounter(arr1.sort()).join("") == sameCounter(arr2.sort()).join("");
}
//[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'g' ] [ 'h', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ]
console.log(balance([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'g' ], [ 'h', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ]));