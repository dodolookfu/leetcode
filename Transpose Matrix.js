/**
  * @param {number[][]} A
  * @return {number[][]}
  */
  var transpose = function(A) {
    if((1 <= A.length <= 1000) && (1 <= A[0].length <= 1000)){
      let i=0,j=0,
          len=A.length,
          temp=[],result=[];
      for(i=0; i<A[0].length ;i++){
        for(j=0; j<len ;j++){
          temp.push(A[j][i]);
        }
        result.push(temp);
        temp=[];
      }
      return result;
    }else{
      return;
    }  
  };