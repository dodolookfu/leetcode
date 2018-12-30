  /**
    * @param {string[]} A
    * @return {number}
    */
    var minDeletionSize = function(A) {
    let result = 0;
      for(let i = 0 ; i<A[0].length ; i++){
        for(let j = 1 ; j<A.length ; j++){
          if(A[j].charAt(i) < A[j-1].charAt(i)){
            result++;
            break;
          }
        }
      }
      return result; 
    };