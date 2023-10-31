"use strict"
const myInfo= {
    name1:"Olivia",
    address:"123 Main Street",
    city:"Anytown",
    state: "NJ",
    zip: "12343"

}

 function printContact(myInfo){
    console.log(myInfo.name1)
    console.log(myInfo.address)
    console.log(`${myInfo.city} , ${myInfo.state} ${myInfo.zip}`)
} 

printContact(myInfo);