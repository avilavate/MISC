function orderType(arr) {
    var order = "Unsorted";
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Number.isInteger(arr[i]) ? arr[i] : arr[i].length;
    }
    console.dir(arr);
    for (var i = 0; i < arr.length; i++) {
        // var cond = !!(i + 1 <= arr.length && parseInt(arr[i]) && parseInt(arr[i+1]));

        // console.log(cond);
        if (i + 1 < arr.length && arr[i] > arr[i + 1]) {
            if (i !== 0 && order !== "Decreasing") return "Unsorted"; else order = "Decreasing";
        }
        else if (i + 1 < arr.length && arr[i] < arr[i + 1]) {
            if (i !== 0 && order !== "Increasing") return "Unsorted"; else order = "Increasing";
        }
        else if (i + 1 < arr.length && arr[i] === arr[i + 1]) {
            if (i !== 0 && order !== "Constant") return "Unsorted"; else order = "Constant";
        }
    }
    return order;
}

console.log(orderType([1, '2hg', 4, 5]));