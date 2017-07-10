function palindrome(str) {
  fixstr = str.toLowerCase().replace(/[\W_]/g, '');
  reversefixstr = reverseString(fixstr);
  if (fixstr == reversefixstr){
    return true;
  }
  else {
    return false;
  }
  
  
}

  function reverseString(str) {
  array = [];
  revarray = [];
  array = str.split("");
  revarray = array.reverse();
  str = revarray.join("");
  return str;
}