function count(input) {
  let uniNumber = new Set(input);                       //建立一個不重複的set
  let uniNumberCount = {};                              //建立一個最後要回傳的空物件
  for (let i of uniNumber.values()) {
    let NumberOfAlphabet = { keys: i, count: 0 };       //每個不重複的key值建立一個物件,初始count為0
    for (let j = 0; j < input.length; j++) {            //開始數input裡面有幾個值
      if (input[j] == i) {
        NumberOfAlphabet.count += 1;                    //有的話count+1
      }
    }
    uniNumberCount[i] = NumberOfAlphabet['count'];      //登錄key和count的資料
  }
  return (uniNumberCount);
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
  let uniNumber = new Set();                            //建立一個不重複的set
  for (i in input) {
    uniNumber.add(input[i]['key']);
  }
  let uniNumberCount = {};                              //建立一個最後要回傳的空物件
  for (let i of uniNumber.values()) {                   //逐項獨立key值進行統計
    let NumberOfAlphabet = { keys: i, count: 0 };       //先針對獨立key值建立一個物件,初始count為0
    for (let j = 0; j < input.length; j++) {
      if (input[j]['key'] == i) {                       //開始數input裡面有幾個key符合
        NumberOfAlphabet.count += input[j]['value'];    //有的話加值上去
      }
    }
    uniNumberCount[i] = NumberOfAlphabet['count'];      //登錄key和count的資料
  }
  return (uniNumberCount);
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
//  should print { a: 6, b: 1, c: 7 }