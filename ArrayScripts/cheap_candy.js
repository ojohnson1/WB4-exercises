"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
]

for (let i=0;i < products.length; i++)
{
    if (products[i].price < 4 )
    {console.log(products[i].product)}
}

for (let i=0;i < products.length; i++)
{
    if (products[i].product.indexOf("M&M")  )
    {console.log(products[i].product)}
}

for (let i=0;i < products.length; i++)
{
    if (products[i].product == "Swedish Fish" )
    {console.log(products[i].product)}
}