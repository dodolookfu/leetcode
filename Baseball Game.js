  /**
    * @param {string[]} ops
    * @return {number}
    */
   var calPoints = function(ops) {
    let result = [];
      for(let i=0;i<ops.length;i++){
        if(ops[i] == '+'){
          let len = result.length;
          result.push(result[len-1] + result[len-2]);
        } else if (ops[i] == 'D'){
          let len = result.length;               
          result.push(result[len-1]*2);
        } else if (ops[i] == 'C'){
          result.pop();
        } else {
          result.push(parseInt(ops[i]));
        }
      }
    let sum = 0;
    result.forEach( i => sum+=i );      
    return sum;
  };