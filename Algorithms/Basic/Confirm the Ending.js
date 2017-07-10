function confirmEnding(str, target) {
  checkstr = str.substring((str.length - target.length) , str.length);
  if (checkstr == target){
  return true;
  }
  else {
    return false; 
  }
}