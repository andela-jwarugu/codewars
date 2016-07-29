function findOutlier(integers){
  var even = [];
  var odd = [];
  integers.map(function(int){
    return(int%2)==0 ? even.push(int): odd.push(int);
  })
  return even.length===1 ? even[0] : odd [0];
}
console.log(findOutlier([2,6,8,10,3]));
