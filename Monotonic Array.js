  /**
    * @param {number[]} A
    * @return {boolean}
    */
   var isMonotonic = function(A) {
    let len = A.length-1;
    let asc = 0;
    let des = 0;  
    for(let i=0; i<len; i++){    
      if(A[i]<A[i+1]){
        asc++;
      }else if(A[i]>A[i+1]){
        des++;
      }else{
        asc++;
        des++;
      }
    }  
    return (asc == len || des == len) ? true : false;
  };