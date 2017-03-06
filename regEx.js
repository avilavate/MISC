var readCommands = function (commands) {
    console.log(commands);
    commands = commands.join("").toString();
    console.log(commands);
    // Return true if we end in our accept state, false otherwise.
    //var regEx = new RegExp("0*1('00'*|1*|'01'*)","g");
    var match= commands.match("/0*1(00|1|01)*/g");
    return   match != null && str == match[0];
    // regEx.test(parseInt(commands));
}

console.log(readCommands(["1", "0", "0", "1"]));