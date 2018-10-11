/**
  * @param {number} num
  * @return {number}
  */
  var findComplement = function(num) {
    let result=0;
    let number=num.toString(2);
    number=number.split('');
    let newArr = number.map(function(el) {
      return el==1 ? 0:1;  
    });
    const temp=newArr.join('');     
    return parseInt(temp,2);
  };