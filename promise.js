function a() {
    var p = new Promise((res, rej) => {
        setTimeout(function () {
            rej("from a!");
        }, 0);
    });
    return p;
}

function b() {
    console.log("b called");
    var p = new Promise((res, rej) => {
        setTimeout(function () {
            res("from b!");
        }, 1000);
    });
    return p;
}

function c() {
    var p = new Promise((res, rej) => {
        setTimeout(function () {
            res("from c!");
        }, 3000);
    });
    return p;
}

a().
    then(aMessage => {
        console.log(aMessage);
        return b();
    }, errA=>{console.log("from err fun of a", errA)}).

    then(bMessage => {
        console.log("b", bMessage);
        return c();
    })

    .then(cMessage => {
        console.log("c", cMessage);
    })
    .catch(reason => {
        console.log("Catch block",reason);
    })