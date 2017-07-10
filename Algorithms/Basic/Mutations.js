function mutation(arr) {
  letters = arr[1].toLowerCase().split("");
  for (var i = 0; i < letters.length; i++){
    if (arr[0].toLowerCase().indexOf(letters[i]) == -1) {
      return false;
    }
  }
  return true; 
}