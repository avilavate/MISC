var getFileWriterModule = require('./ioc/factory/file-writer-factory');

//console.dir(getFileWriter);
console.log("Setting Dependencies:");

let fileName = "test.text";
let content = "some garbage text...!";
let successMessage = "Done!";
let errorMessage = "Something went wrong!";

let myFileWriter = getFileWriterModule.getFileWriter();
myFileWriter(fileName, content, successMessage, errorMessage);
