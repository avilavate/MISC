function isBalanced(s, caps) {
    var symbol = caps, stack = [];
    if (symbol.length % 2 !== 0) return false;
    for (var j = 0; j < s.split("").length; j++) {
        var i = s.split("")[j];
       
        if (stack.length>0 && stack[stack.length - 1] === i) { console.log(stack); stack.pop(); continue; }
        symbol[0] === i || symbol[2] === i ? stack.push(i) : null;
        symbol[1] === i ? (stack[stack.length - 1] === symbol[0] ? stack.pop() : null) : (symbol[3] === i ? (stack[stack.length - 1] === symbol[2] ? stack.pop() : null) : null);
    };
    return stack.length === 0 ? true : false;
}
console.log(isBalanced("Sensei -says no!", "--"));//