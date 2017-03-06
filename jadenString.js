String.prototype.toJadenCase = function () {
  var res=[];
  this.split(" ").forEach((i)=>{
      res.push(i[0].toUpperCase()+i.substring(1,i.length));
  });
  return res.join(" ");
};
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());