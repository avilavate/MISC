function findOdd(A) {
    for (var i = 0; i < A.length; i++) {
        var occurences = A.reduce(function (a, e, i1) {
            if (e === A[i])
                a.push(i1);
            return a;
        }, []);
        //  console.log(A[i], occurences)
        if (occurences.length % 2 !== 0) return A[i];
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));