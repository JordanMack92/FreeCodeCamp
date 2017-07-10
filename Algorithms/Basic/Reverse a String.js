function reverseString(str) {
  array = [];
  revarray = [];
  array = str.split("");
  revarray = array.reverse();
  str = revarray.join("");
  return str;
}