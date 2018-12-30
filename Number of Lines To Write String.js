  /**
    * @param {number[]} widths
    * @param {string} S
    * @return {number[]}
    */
   var numberOfLines = function(widths, S) {
    let count = 0;
    let line = 0;
    for (var c in S) {    
      let num =(S.charCodeAt(c))-97;
      count += widths[num];
      if(count==100){
        count = 0;
        line++;      
      }else if(count>100){
        count = widths[num];
        line++;
      }
    }
    if(count !=0) line++;
    return [line,count]  
  };