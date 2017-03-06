var nameValidation = (name) => {
    var patt = /[a-zA-Z]+/g;
    return name.match(patt).join("") === name;
}

String.prototype.isAudio = function () {
    var name = this;
    var name = name.split(".");
    if (name.length !== 2) return false;
    if (!nameValidation(name[0])) return false;
    // .mp3, .flac, .alac, or .aac.
    name[1]=name[1].toLowerCase();
    return name[1] === "mp3" || name[1] === "flac" || name[1] === "alac" || name[1] === "aac" ? true : false;
}

String.prototype.isImage = function () {
    var name = this;
    var name = name.split(".");
    if (name.length !== 2) return false;
    if (!nameValidation(name[0])) return false;
    //.jpg, .jpeg, .png, .bmp, or .gif.
    name[1]=name[1].toLowerCase();
    return name[1] === "jpg" || name[1] === "jpeg" || name[1] === "png" || name[1] === "gif" || name[1]==="bmp"? true : false;
}

console.log("jaoneqng.bmp".isImage());