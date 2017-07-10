function rot13(str) { 
  
  array = str.split("");
  codedarr = [];

  for (var i = 0; i < array.length; i++)
    {
      if(array[i].match(/[A-M]/))
        {
          codedarr.push(array[i].charCodeAt()+13);
        }
      else if(array[i].match(/[N-Z]/))
         {
           codedarr.push(array[i].charCodeAt()-13);
         }
      else
        {
          codedarr.push(array[i]);
        }
    }
  //return codedarr;
  
  translatedarr = [];
  for (var j = 0; j < codedarr.length; j++)
    {
      if(array[j].match(/[A-Z]/))
        {
          translatedarr.push(String.fromCharCode(codedarr[j]));
        }
      else
        {
          translatedarr.push(codedarr[j]);
        }
    }
  return translatedarr.join("");
}