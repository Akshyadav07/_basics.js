let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);

let myCreateddate = new Date("01-14-2023")
console.log(myCreateddate.toDateString());

let myowndate = new Date(2023 , 0 , 23 , 5 , 9) // we can give time and date togeather 
console.log(myowndate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

//++++++++++++in object format ++++++++++++++++

newDate.toLocalString('default',{
    weekday: "long",
    timezone: '',

})

