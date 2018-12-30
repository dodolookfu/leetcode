  /**
    * @param {string} S
    * @param {character} C
    * @return {number[]}
    */
   var shortestToChar = function(S, C) {
    temp = S;
    ary = []
    while(temp.indexOf(C) != -1){  
      var index = temp.indexOf(C);
      ary.push(index);
      var tempAry=temp.split('');
      tempAry.splice(index,1,"0");
      temp = tempAry.join('');
    }
    var result = [];
    console.log(ary)
    for(let i=0;i<S.length;i++){
      var min = [];
      for(let j=0;j<ary.length;j++){
        min.push(Math.abs(i-ary[j]));
      }
      var x=Math.min(...min)
      min = [];    
      result.push(x);
    }
    return (result)
  };