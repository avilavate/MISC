
module.exports.fileWriter = function (filestream, filename, content, successMessage, errorMessage) {
    filestream.writeFile(filename, content, function (err) {
        if (err) {
            return console.log(errorMessage);
        }
        console.log(successMessage);
    });
}

//export default fileWriter;