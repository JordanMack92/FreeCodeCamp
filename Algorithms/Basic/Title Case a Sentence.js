function titleCase(str) {
  strlower = str.toLowerCase();
  words = strlower.split(" ");
  for (var i = 0; i < words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}