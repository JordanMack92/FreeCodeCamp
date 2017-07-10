function largestOfFour(arr) {
  array =[];
  for (var i = 0; i < arr.length; i++){
    max = 0;
    current = 0;
    for (var j = 0; j < arr[i].length; j++){
      current = arr[i][j];
      if (max < current){
        max = current;
      }
    }
    array.push(max);
  }
  return array;
}