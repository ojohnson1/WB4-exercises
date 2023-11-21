"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
 let yourScores = [82, 98, 94, 88, 92, 100, 100];


 function getAverage (scores){
    let total=0
     let sum=0
   
     for (let i=0 ; i < scores.length ; i++){
          sum += scores[i] //add score found to sum
         total= sum/scores.length
        
    }
    //by now , total should have been increased with all values
    return total;
 }


 console.log ( `My average is + ${getAverage(myScores)}`)
 console.log ( `My average is + ${getAverage(yourScores)}`)