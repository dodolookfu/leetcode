/**
  * @param {number} x
  * @return {boolean}
  */
  var isPalindrome = function(x) {
  var result=true;  
  if(x.toString().split('').reverse().join('') != x.toString()) result=false;
  return result;
};