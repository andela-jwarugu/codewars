var str = 'testingtesting';
var arr1 = [];

for (var i=0; i<str.length; i++){
  if (i%2===0){

    console.log(str[i]);
    arr1.push(str[i].toUpperCase());
  }
  else{
    arr1.push(str[i]);
  }
}
 console.log(arr1.join(''));
