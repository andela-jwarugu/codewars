function list(names){
  var arrayNames = names.map(function(name){
    return name[Object.keys(name)];
  });
  // arrayNames.join(' ').replace(/\s/)
  return arrayNames.join(', ');
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
