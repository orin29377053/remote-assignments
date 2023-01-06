function countAandB(input) {
    let count_A=0;
    let count_B=0;
    for (let i = 0;i<input.length;i++){
        if (input[i]=='a'){
            count_A+=1;
        }else if(input[i]=='b'){
            count_B+=1;
        }else{}
    }
    let count=count_A+count_B
    if (count==0){
        return `${count} (there is no A & B in list)`
    }else{
        return `${count} (${count_A}'a' letter${count>1?"s":""} and ${count_B}'b' letter${count>1?"s":""})`
    }
    
}

function toNumber(input) {
    let number_list={
        'a':1,
        'b':2,
        'c':3,
        'd':4,
        'e':5,
        }
    let trans_list=[];
    for (let i = 0;i<input.length;i++){
        trans_list.push(number_list[input[i]])
    }
    return trans_list
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
