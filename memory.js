// stack (primitive), heap (non primitive)

let myYoutubeName = "animetoon"
let anotherName = "myYoutubeName"
anotherName = "flexgaming"
console.log(anotherName);
console.log(myYoutubeName);

let user1= {
    email: "solo@gmail.com",
    upi: "sbi@icici"
}

let user2 = user1

user2.email = "aksh@gmail.com"
console.log(user2);
