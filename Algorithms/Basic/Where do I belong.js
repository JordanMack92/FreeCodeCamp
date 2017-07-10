function getIndexToIns(arr, num) {

  arr.sort(function(a,b){
    return a - b;
  });
  
  for (var i = 0; i < arr.length - 1; i++)
  {
    if (num > arr[i] && num <= arr[i+1])
    {
      return i+1;
    }
    if (num == arr[i])
      {
        return i;
      }
    if (num > arr[i] && i == arr.length -2)
      {
        return i+2;
      }
  }

}
