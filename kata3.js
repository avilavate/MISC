DocumentParser.prototype.parse = function () {
   /* this.wordCount = 0;
    this.charCount = 0;
    this.lineCount = 0;
    this.reset()*/
   var chunk = this.DocumentParser.getChunk();
    while (chunk !== '') {

        chunk.split("").array.forEach(function (e) {
            e === "\\n" ?thid.lineCount++ : null;
        });
      
    }
};