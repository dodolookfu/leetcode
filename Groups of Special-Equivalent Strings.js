  /**
    * @param {string[]} A
    * @return {number}
    */
   var numSpecialEquivGroups = function(A) {
    let len = A.length;
    let result = [];  
    let count = 0;
    for(let i = 0;i<A.length;i++){
      let cur = getParse(A[i]);    
      if(!result[cur]){
        result[cur] = true;
        count++;
      }
    }
    return count;
  };

  function getParse(str){
    let odd="",even="";
    for(let i = 0;i<str.length;i++){
      if(i %2 ==0){
        even += str[i];      
      }else{
        odd += str[i];      
      }
    }  
    if(even) even = even.split('').sort().join('');
    if(odd) odd = odd.split('').sort().join('');  
    return even+odd
  }