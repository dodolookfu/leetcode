/**
  * @param {number[]} A
  * @return {number[]}
  */
  var sortArrayByParity = function(A) {
    result=[];
    temp=[];
    for(var i in A){
      if (A[i] % 2 == 0){
        result.push(A[i]);
      }else{
        temp.push(A[i]);
      }
    } 
    result=result.concat(temp);
    return result;
  };