// function squareDigits(num){
//   var str = num.toString();
//   var arr = [];
//
//   for (var i=0; i<str.length; i++){
//     arr.push(Math.pow(str[i], 2));
//   }
//   return parseInt(arr.join(''));
// }
// console.log(squareDigits(70));

function squareDigits(num){
  var arr = num.toString().split('').map(function (digit) {
    return Math.pow(digit, 2);
  })
  return parseInt(arr.join(''));
}
console.log(squareDigits(70));
