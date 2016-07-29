function fizzBuzz(arg){
  if (arg%3===0 && arg%5!==0 ){
    return 'Fizz';
  }else if (arg%3!==0 && arg%5===0 ) {
    return 'Buzz';
  }else if (arg%3===0 && arg%5===0 ) {
    return 'FizzBuzz';
  }
}
