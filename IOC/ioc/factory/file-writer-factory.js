var fs = require('fs');
var fileWriterModule = require('../file-writer');

module.exports.getFileWriter = function () {
    return fileWriterModule.fileWriter.bind(null, fs);
}

//export default getFileWriter;