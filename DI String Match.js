  /**
    * @param {string} S
    * @return {number[]}
    */
   var diStringMatch = function(S) {
    let ary = Array.from(S);   
    let result = new Array(ary.length+1);
    i_index = ary.indexOf('I');
    d_index = ary.indexOf('D');
    if(i_index != -1) {
      result[i_index]=0;
    };
    if(d_index != -1) result[d_index]=ary.length;
    let I = 0;
    let D = ary.length;
    ary.push(ary[0]);
    
    let index = 0;
    for(let i = 0;i<ary.length;i++){
      if(result[index]==null && ary[i] == 'I'){
        I++;
        result[index]=I;      
      }else if(result[index]==null && ary[i] == 'D'){
        D--;
        result[index]=D;      
      }    
      index++;   
    }
    return result
  };