function naturalCompare(a, b) {
    var res=0;
    var getNums = function (str, numA) {
        return str.split("").map((i, index) => {
            if (parseInt(i)) return { "v": parseInt(i), "index": index }; else return;
        }).filter((i) => { return i !== undefined; });
    };
    a = getNums(a);
    b = getNums(b);
   for(var k=0;)
    return res;
}


console.log(naturalCompare("aa1", "aa01a"));

/*
  "file 01",  "file 1", 1,
  "file 1","file 01", -1,
  
  "aa01","aa10", -1,
  "aa9" ,"aa10", -1,
  "aa1" ,"aa01a", -1,
  "aa1a","aa01", 1,
  "aa11","aa10", 1,
  "hello", "hello", 0
  */