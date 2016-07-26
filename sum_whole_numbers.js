function f(n){
 if (n>0 && Number.isInteger(n)== true){
   var total = 0;
   for (var i=0; i<=n; i++){
     total += i;
   }
   return total;
 }
 else {
   return false;
 }
};

console.log(f(100));
