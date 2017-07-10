function destroyer(arr) {
  array = arguments[0];
  deleteThese = [];
  for (var i = 1; i < arguments.length; i++)
  {
    deleteThese.push(arguments[i]);
  } 
  return arr.filter(function(n)
  {
    return deleteThese.indexOf(n) < 0;
  });
}