function chunkArrayInGroups(arr, size) {
  var resultarr=[];
  for ( var i = 0; i < arr.length; i += size )
    {
      resultarr.push(arr.slice(i, size + i));
    }
  return resultarr;
}