  /**
    * @param {number[]} A
    * @return {number[]}
    */
   var sortArrayByParityII = function(A) {
    let len = A.length;  
    let even_ary = A.filter(num => num % 2 == 0);
    let odd_ary = A.filter(num => num % 2 != 0);
    let result = [];  
    for(let i=0;i<odd_ary.length;i++) {
      result.push(even_ary[i]);
      result.push(odd_ary[i]);
    }  
    return result;
  };