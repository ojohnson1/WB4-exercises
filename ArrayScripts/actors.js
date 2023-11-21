"use strict"


let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
  
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   for (let i=0; i < academyMembers.length; i++){
    if ( academyMembers[i].memID == "187" ){
        console.log(`This actor memID is 187 ${academyMembers[i].name}`)
    }
   }

 
   for (let i=0; i < academyMembers.length; i++){
    if ( academyMembers[i].films.length >= 3 ){
        console.log(academyMembers[i].name)
    }
   }



    for (let i=0; i < academyMembers.length; i++){
  if (academyMembers[i].name.includes("Bob") )
    console.log(academyMembers[i].name)
    }

    for (let i=0; i < academyMembers.length; i++){
        if (academyMembers[i].films.indexOf("A"))
          console.log(academyMembers[i].name)
          }
    

    
 
//     if ( ){
//         console.log(academyMembers[i].name)
//     }
//    }