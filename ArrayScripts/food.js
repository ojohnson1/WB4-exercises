"use strict"

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];


    function getMealCost(lunch){
            let sum =0;
        for( let i=0; i < lunch.length ;i++){
            sum += lunch[i].price;
        }
        return sum;
    }
  let taxPercentage=.08
  let tipPrecentage=.18
  let totaldue;
 let mealcost= getMealCost(lunch);
 // Unknown values
   let tax = mealcost*taxPercentage 
   let tip = mealcost*tipPrecentage
   totaldue = mealcost + tax + tip
   
    console.log (`Your subtotal is + ${getMealCost(lunch)}`)
    console.log (`The tax on the total is  ${tax.toFixed(2)}` )
    console.log (`The tip on the total is  ${tip.toFixed(2)}` )
    console.log (`The total due  is  ${totaldue.toFixed(2)}` )