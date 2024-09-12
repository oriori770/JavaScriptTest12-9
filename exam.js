function Mission1(arr) {
  const evenNumbersOnly = arr.filter((num) => num % 2 === 0);
  return evenNumbersOnly;
}
const fooarray = [1, 54, 8, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 1, 5, 8, 0, -2];
//console.log(Mission1(fooarray)); //output: [54, 8, 4, 8, 0, -2]

function Mission2() {}
function Mission3(arrTwoDim) {
  const oneDim = arrTwoDim.flat();
  return oneDim;
}
const fooarrayTowDim = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//console.log(Mission3(fooarrayTowDim)); //output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

function Mission4() {}
function Mission5(keyArr, valueArr) {
  const newObj = {};
  for (let i = 0; i <Math.min( keyArr.length, valueArr.length); i++) {
    newObj[keyArr[i]] = valueArr[i];
  }
  return newObj;
}
const fooKeyArr = ["a", "b", "c", "d"];
const fooValueArr = [1, 2, 3,4,5];
//console.log(Mission5(fooKeyArr, fooValueArr)); //output:{ a: 1, b: 2, c: 3, d: 4 }

function Mission6(index) {
  let pervFib = 0;
  let curFib = 1;
  for (let i = 1; i < index; i++) {
    [pervFib, curFib] = [curFib, pervFib + curFib];
  }
  return curFib;
}
//console.log(Mission6(9));//output: 34
//console.log(Mission6(4));//output:3

module.exports = {
    Mission1,
    Mission3,
    Mission5,
    Mission6,
}
