/**
  * @param {number} n
  * @return {boolean}
  */
  var isPowerOfTwo = function(n) {      
    if(n==1) return true;      
    let result;
    while(1==1){    
      n = n / 2;
      if (n==1){      
        result = true;
        break;
      }
      if (n<1){       
        result = false;
        break;
      }
    }
    return result;
  };