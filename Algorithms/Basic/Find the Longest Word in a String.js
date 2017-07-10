function findLongestWord(str) {
  max = 0;
  current = 0;
  words = str.split(" ");
  for (var i = 0; i < words.length; i++){
    current = words[i].length;
    if (max < current){
      max = current;
    }
  }
  return max;
}