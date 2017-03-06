function smallest(n) {
    var i = 0, sortList = n.toString().split("").sort();
    var index = n.toString().indexOf(sortList[i]) === 1 ? 0 : n.toString().indexOf(sortList[i]);
    var newIndex= index===0?1:0;

    return [parseInt(sortList[i] + n.toString().replace(sortList[i], "")), index, newIndex];
}

console.log(smallest(285365));

//smallest(261235) --> [126235, 2, 0]

//209917, [29917, 0, 1]);