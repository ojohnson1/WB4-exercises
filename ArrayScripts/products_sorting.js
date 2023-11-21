"use strict"

let products = [
    {prodId: 2, item: "Notepads (12 pk)", price: 12.29},
    {prodId: 12, item: "Black Pens (12 pk)", price: 5.70},
    {prodId: 22, item: "Stapler", price: 12.79},
   ];

let itemInArray=[];
let numOfProducts=products.length
 for (let i=0; i < numOfProducts;i++){
   itemInArray.push(products[i].item)
    
 
 }
itemInArray.sort();
   
 for (let i = 0; i < numOfProducts; i++) {
    console.log(itemInArray[i]);
  }

