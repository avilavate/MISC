function formatDuration(seconds) {
    var res = "";
    var numyears = Math.floor(seconds / 31536000);
    res += numyears ? (numyears > 1 ? numyears + " years " : numyears + " year ") : "";
    var numdays = Math.floor((seconds % 31536000) / 86400);
    res = res && numdays ? res.trim() + ", " : res;
    res += numdays != 0 ? (numdays > 1 ? numdays + " days " : numdays + " day ") : "";
    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    res = res && numhours ? res.trim() + ", " : res;
    res += numhours ? (numhours > 1 ? numhours + " hours " : numhours + " hour ") : "";
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    res = res && numminutes ? res.trim() + ", " : res;
    res += numminutes ? (numminutes > 1 ? numminutes + " minutes " : numminutes + " minute ") : "";
    var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
    res += numseconds ? (numseconds > 1 ? numseconds + " seconds " : numseconds + " second ") : "";
    var matches = res.match(/\d+/g);
    if (matches && matches.length > 1) {
        var res2 = res.substring(res.lastIndexOf(matches[matches.length - 1]), res.length);
        res2 = " and " + res2;
        var res1 = res.substring(0, res.lastIndexOf(matches[matches.length - 1]));
        res1 = res1.trim();
        res1[res1.length - 1] == "," ? res1 = res1.substring(0, res1.length - 2) : res1 = res1;
        res = res1 + res2;
    }
    return res.trim() == '' ? 'now' : res.trim();
}
console.log(formatDuration(132030240));