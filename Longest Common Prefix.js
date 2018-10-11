/**
  * @param {string[]} strs
  * @return {string}
  */
  var longestCommonPrefix = function(strs) {      
    if(strs.length==0) return '';         
    strs.sort(function(a,b){return a.length-b.length;})
    var len =strs.length;     
    var result='';    
    for(var j in strs[0]){
      var temp=strs[0][j];
      var count=0;    
      for(var i=0;i<len;i++){      
        if(strs[i][j]==temp)  count++;
      }    
      if(count==len){
        result+=temp;      
        count=0;
      }else{      
        break;
      }
    }
    console.log(result)
    return result;
  };