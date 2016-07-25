function addBinary(a,b) {
  var sum = a + b;
  var arr1 = [];

  while(sum!=0){
    arr1.push(sum%2);
    sum = Math.floor(sum/2);
  }

  return arr1.reverse().toString().replace(/,/g, '');
}

console.log(addBinary(3,6));

// awesome one liner to do all this:
// console.log((9).toString(2));
