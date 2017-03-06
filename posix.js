var stack=[];
//"5-4-1+9/5/2-7/1/7"), "54-1-95/2/+71/7/-"
function toPostfix (infix) {
  // Convert infix to postfix here, and return result.
  var prec={'(':5,')':4,'*':3,'/':2,'-':1,'+':0},res="", stack=[];
  
  infix.split("").forEach((token)=>{
      console.log(token in prec);
      token in prec?res+=handleOpr(token, stack):res+=token;
  });
  
var oprs="";  
  stack.forEach((opr)=>{
if(opr!="("||opr!=")"){oprs+=opr;}
  });
return res+oprs;
}
var handleOpr=function(token, stack){ 
    var resOpr="", res="", prec={'(':5,')':4,'*':3,'/':2,'-':1,'+':0};
if(stack.length===0){stack.push(token); return "";}
else { 
    while(stack.length>0){
        var ch=stack.pop();
        if(prec[ch]>prec[token]){
            console.log(prec[ch],prec[token])
          resOpr+=ch;
          continue;      
        }else{
            stack.push(token);
            stack.push(ch);
            break;
        }

    }
}
res+=resOpr;
resOpr="";
return res;
};

console.log(toPostfix("(5-4-1)+9/5/2-7/1/7"));
