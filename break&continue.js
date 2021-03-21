// for(let i=1;i <= 5;i++){
//     //condition to continue
//     if(i == 3){
//         continue;
//     }
//     console.log(i)
// }

const scores = [50,25,0,30,100,20,10]

for (let i=0;i < scores.length;i++){
    if(scores[i] === 0){
        continue;
    }
    console.log('you score:',scores[i])
    if(scores[i] === 100){
        console.log('congrats, you got the top score!')
        break;
    }
}