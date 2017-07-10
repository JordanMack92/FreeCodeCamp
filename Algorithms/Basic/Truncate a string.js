function truncateString(str, num) {
  
  if (num > 3 && num+3 < str.length)
   {
      return str.slice(0, num - 3) + "...";
   }
  else if (num > 3)
   {
      return str.slice(0, num);
   }
  else
   {
      return str.slice(0, num) + "...";
   }
  
}