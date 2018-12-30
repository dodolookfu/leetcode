  /**
    * @param {string} num1
    * @param {string} num2
    * @return {string}
    */
   var addStrings = function(num1, num2) {      
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = '';
    //-'0' to int?
    while(i>=0 || j>=0 || carry>0){
      const temp1 = i>=0 ?  num1.charAt(i) -'0' : 0;
      const temp2 = j>=0 ?  num2.charAt(j) -'0' : 0;
      const tempSum = temp1+temp2+carry;
      sum = ((tempSum % 10) +'') + sum;      
      carry = Math.floor(tempSum / 10);
      i--;
      j--;
    }      
    return sum      
  };