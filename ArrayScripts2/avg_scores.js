let myScores = [92, 98, 84, 76, 89, 99, 100];
 let yourScores = [82, 98, 94, 88, 92, 100, 100];


 function getAverage(scores){
  let sum=0;
    for (let i=0;i < scores.length; i++){
        sum += scores[i]

    }

    sum/scores.length
 }

 getAverage(myScores);

 