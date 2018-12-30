  /**
    * @param {number[]} A
    * @param {number} K
    * @return {number}
    */
   var smallestRangeI = function(A, K) {
    let max = Math.max(...A);
    let min = Math.min(...A);  
    return (max-min <= K*2) ? 0 : max-min-K*2;
  };