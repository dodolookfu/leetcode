  /**
    * @param {number} n
    * @return {boolean}
    */
   var isPowerOfThree = function(n) {
    if(n==0) return false;
    if(n==1) return true;
    while(1==1){
      n = n / 3;
      if(n==1) return true;
      if(n<1) return false;
    }
  };