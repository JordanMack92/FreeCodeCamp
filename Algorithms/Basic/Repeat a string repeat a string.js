function repeatStringNumTimes(str, num) {
  string = "";
  if (num > 0)
  {
    for (var i = 0; i < num; i++)
      {
        string += str;
      }
    return string;
  }
  else 
  {
    return "";
  }
}