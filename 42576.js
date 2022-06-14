
const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

const solution = (participant, completion) => {
    
    let obj = {};
    
    participant.forEach(item => {
        if(obj[item] > 0) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    })
    console.log(obj);

    completion.forEach(item =>  {  
        obj[item]--;
    })

    console.log(obj);
    console.log(Object.keys(obj));
    return Object.keys(obj).filter(item => obj[item] > 0).toString('');
}


console.log(solution(participant, completion));
