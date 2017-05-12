var myObj={
    myFun:function(){
        console.log("myFun:", this);
    }
}

//myObj.myFun();
myObj.myFun.bind({})()
