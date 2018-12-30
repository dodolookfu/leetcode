  /**
    * @param {string} A
    * @param {string} B
    * @return {string[]}
    */
   var uncommonFromSentences = function(A, B) {
    var str = (A+" "+B).split(" ");  
    var result = [];
    var len = str.length;
    for(let i = 0;i < len;i++){
      var check = true;
      for(let j = 0;j < len;j++){
        if(i!=j && str[i]==str[j]){        
          check=false;
        }
      }
      if(check){
        result.push(str[i]);
      }
      check = true;
    }  
    return result
  };