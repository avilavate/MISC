function friend(friends){
 return friends.filter((f)=>{return f.length===4});
}

console.log(friend(["Ryan", "Kieran", "Mark"]));